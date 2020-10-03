const {Router} = require('express');
const router = new Router();
const ProdutoController = require('../controllers/produtoController');

router.post('/create', ProdutoController.store);
router.put('/update/:id',ProdutoController.update);
router.get('', ProdutoController.index);
router.get('/:id', ProdutoController.getById);
router.delete('/delete/:id', ProdutoController.destroy);

module.exports = router ;