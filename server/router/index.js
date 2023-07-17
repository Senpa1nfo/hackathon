const Router = require('express').Router;
const PostController = require('../controllers/post-controller');
const router = new Router();

router.get('/', (req, res) => { });

router.get('/posts', PostController.getAll);
router.get('/posts/:id', PostController.getOne);
router.post('/posts/create/:id', PostController.create);
router.delete('/posts/delete/:id', PostController.remove);
router.patch('/posts/update/:id', PostController.edit);

module.exports = router;