const Router = require('express').Router;
const router = new Router();
const {body} = require('express-validator');
const authMiddleware = require('../middlewares/auth-middleware');
const UserController = require('../controllers/user-controller');
const PostController = require('../controllers/post-controller');
const SubjectController = require('../controllers/subject-controller');
const TestController = require('../controllers/test-controller');

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
router.patch('/posts/update/:path', PostController.edit);
router.delete('/posts/delete/:path', PostController.remove);

router.get('/subject', SubjectController.getAll);
router.get('/subject/:path', SubjectController.getOne);
router.post('/subject/create/:path', SubjectController.create);
router.patch('/subject/update/:path', SubjectController.edit);
router.delete('/subject/delete/:path', SubjectController.remove);
router.patch('/subject/update-progress/:chapterPath', UserController.updateProgress);
router.patch('/subject/update-progress/:chapterPath/:partPath', UserController.updatePartProgress);

router.get('/test', TestController.getAll);
router.get('/test/:subject/:part', TestController.getOne);
router.post('/test/create/:subject/:part', TestController.create);
router.patch('/test/update/:subject/:part', TestController.edit);
router.delete('/test/delete/:subject/:part', TestController.remove);

module.exports = router;