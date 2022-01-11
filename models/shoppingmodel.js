var bookshelf =  require('../bookshelf');

var Item = bookshelf.model('Item',{
   tableName: "shopping" 
});
module.exports = Item;