let Item = require("../models/shoppingmodel");
const { validationResult } = require("express-validator");

exports.items = async (req, res) => {
  try {
    let items = await Item.fetchAll();
    res.json(items);
  } catch (error) {
    res.send(error);
  }
};

exports.items_id = async (req, res) => {
  try {
    let items_id = await Item.where("id", parseInt(req.params.id)).fetch();
    res.json(items_id);
  } catch (error) {
    res.send(error);
  }
};

exports.items_post = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send("invalid item or price.Try again");
    }
    let items = await Item.forge({ ...req.body }).save();
    res.json(items);
  } catch (error) {
    res.send(error);
  }
};

exports.items_patch = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).send("invalid item or price.Try again");
    }
    let items = await Item.where("id", parseInt(req.params.id)).save(
      { ...req.body },
      { patch: true }
    );
    res.json(items);
  } catch (error) {
    res.send(error);
  }
};

exports.items_delete = async (req, res) => {
  try {
    let items = await Item.where("id", parseInt(req.params.id)).destroy({
      ...req.body,
    });
    res.json(items);
  } catch (error) {
    res.send(error);
  }
};
