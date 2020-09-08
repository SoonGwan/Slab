import { Router } from 'express';
// import auth from './auth';
import itemList from './item';
import AuthMiddleware from '../../../lib/middleware/auth';
import postItem from './postItem';

const router = Router();

router.get('/itemList', itemList);
router.post('/item', AuthMiddleware.user, postItem);

export default router;
