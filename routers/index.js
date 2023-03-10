const router = require('express').Router();
const userRouter = require('./userRouter');
const photoRouter = require('./photoRouter');
const socialMediaRouter = require('./socialMediaRouter');
const commentsRouter = require('./commentsRouter');
const errorMiddleware = require('./../middlewares/errorMiddleware');

router.get('/', (req, res) => {
  res.status(200).json({ message: 'Selamat datang di API' });
});
router.use('/users', userRouter);
router.use('/photos', photoRouter);
router.use('/socialmedias', socialMediaRouter);
router.use('/comments', commentsRouter);

router.use(errorMiddleware);

module.exports = router;
