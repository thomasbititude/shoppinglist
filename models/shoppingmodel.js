let bookshelf =  require('../bookshelf');

let Item = bookshelf.model('Item',{
   tableName: "shopping" 
});
module.exports = Item;