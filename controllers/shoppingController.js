var Item = require('../models/shoppingmodel');


exports.items =  async (req, res) => {
    var items = await Item.fetchAll();
    res.json(items);
    };

exports.items_id = async(req,res) => {
    var items_id = await Item.where('id',parseInt(req.params.id)).fetch();
    res.json(items_id);
    };

exports.items_post = async(req,res) => {
    var items = await Item.forge({...req.body}).save();
    res.json(items);
    };

exports.items_put = async(req,res) => {
    var items = await Item.where('id',parseInt(req.params.id)).save({...req.body},{patch:true});
    res.json(items);
    }; 
 
exports.items_delete = async(req,res) => {
    var items = await Item.where('id',parseInt(req.params.id)).destroy({...req.body});
    res.json(items);
    }; 