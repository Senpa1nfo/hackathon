const Router = require('express').Router;
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const UserController = require('../controllers/user-controller');
const PostController = require('../controllers/post-controller');


router.post('/registration',
    body('email').isEmail(),
    body('password').isLength({min: 8, max: 16}),
    UserController.registration
);
router.post('/login', UserController.login);
router.post('/logout', UserController.logout);
router.post('/link', UserController.sendLink);
router.get('/activate/:link', UserController.activate);
router.get('/refresh', UserController.refresh);

router.get('/posts', PostController.getAll);
router.get('/posts/:path', PostController.getOne);
router.post('/posts/create/:path', PostController.create);
router.delete('/posts/delete/:path', PostController.remove);
router.patch('/posts/update/:path', PostController.edit);

module.exports = router;