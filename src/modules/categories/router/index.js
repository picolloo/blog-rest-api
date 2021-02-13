import { Router } from 'express';

import CategoriesController from '../controllers';
import { EnsureUserAuthentication } from '../../../shared/middlewares';

const router = new Router();

router.post(
  '/admin/categories',
  EnsureUserAuthentication,
  CategoriesController.create,
);
router.get(
  '/admin/categories',
  EnsureUserAuthentication,
  CategoriesController.index,
);
router.get(
  '/admin/categories/:id',
  EnsureUserAuthentication,
  CategoriesController.show,
);
router.delete(
  '/admin/categories/:id',
  EnsureUserAuthentication,
  CategoriesController.remove,
);

export default router;
