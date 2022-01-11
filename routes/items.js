let express = require('express');
let router = express.Router();
let shopping_controller = require('../controllers/shoppingController');


router.get('/', shopping_controller.items);
router.get('/:id',shopping_controller.items_id);
router.post('/',shopping_controller.items_post);
router.put('/:id',shopping_controller.items_put);
router.delete('/:id',shopping_controller.items_delete);

module.exports = router;
