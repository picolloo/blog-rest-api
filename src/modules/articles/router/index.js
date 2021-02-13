import { Router } from 'express';

import ArticlesController from '../controllers';
import { EnsureUserAuthentication } from '../../../shared/middlewares';

const router = new Router();

router.post(
  '/admin/articles',
  EnsureUserAuthentication,
  ArticlesController.create,
);
router.get(
  '/admin/articles',
  EnsureUserAuthentication,
  ArticlesController.index,
);
router.get(
  '/admin/articles/:id',
  EnsureUserAuthentication,
  ArticlesController.show,
);
router.put(
  '/admin/articles/:id',
  EnsureUserAuthentication,
  ArticlesController.update,
);
router.delete(
  '/admin/articles/:id',
  EnsureUserAuthentication,
  ArticlesController.remove,
);

export default router;
