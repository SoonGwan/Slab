import { Router } from 'express';
// import auth from './auth';
import getUser from './getUser';
import deleteUser from './deleteUser';
import putUser from './putUser';
import AuthMiddleware from '../../../lib/middleware/auth';
import my from './my';
import { RelationQueryBuilder } from 'typeorm';

const router = Router();
router.get('/userList', getUser);
router.delete('/userListDelete', AuthMiddleware.admin, deleteUser);
router.put('/modifyUser', AuthMiddleware.admin, putUser);
router.get('/myInfo', my);

export default router;
