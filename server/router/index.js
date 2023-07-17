const Router = require('express').Router;
const PostController = require('../controllers/post-controller');
const router = new Router();

router.get('/', (req, res) => { });

router.get('/posts', PostController.getAll);
router.get('/posts/:path', PostController.getOne);
router.post('/posts/create/:path', PostController.create);
router.delete('/posts/delete/:path', PostController.remove);
router.patch('/posts/update/:path', PostController.edit);

module.exports = router;