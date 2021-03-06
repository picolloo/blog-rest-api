import express from 'express';

import uploadConfig from '../../utils/upload';
import UserRouter from '../../../modules/users/router';
import SessionsRouter from '../../../modules/sessions/router';
import AuthorRouter from '../../../modules/authors/router';
import CategoriesRouter from '../../../modules/categories/router';
import ArticlesRouter from '../../../modules/articles/router';
import { NotFoundMiddleware, ErrorHandlerMiddleware } from '../../middlewares';

const router = new express.Router();

router.use(SessionsRouter);
router.use(UserRouter);
router.use(AuthorRouter);
router.use(CategoriesRouter);
router.use(ArticlesRouter);
router.use('/files', express.static(uploadConfig.directory));

router.use(NotFoundMiddleware);
router.use(ErrorHandlerMiddleware);

export default router;
