let Item = require('../models/shoppingmodel');


exports.items =  async (req, res) => {
    try{let items = await Item.fetchAll();
        res.json(items);
    } catch (error){
        res.send(error);
    }
    };

exports.items_id = async(req,res) => {
   try{let items_id = await Item.where('id',parseInt(req.params.id)).fetch();
   res.json(items_id);

   } catch (error){
       res.send(error);
   }
   };

exports.items_post = async(req,res) => {
    try{let items = await Item.forge({...req.body}).save();
        res.json(items);
    }catch (error){
        res.send(error);
    }
    };

exports.items_put = async(req,res) => {
    try{let items = await Item.where('id',parseInt(req.params.id)).save({...req.body},{patch:true});
        res.json(items);
    }catch (error){
        res.send(error);
    }
    }; 
 
exports.items_delete = async(req,res) => {
    try{let items = await Item.where('id',parseInt(req.params.id)).destroy({...req.body});
        res.json(items);
    }catch (error){
        res.send(error);
    }
    }; 