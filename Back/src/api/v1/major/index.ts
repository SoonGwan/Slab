import { Router } from 'express';
import getmajor from './getmajor';
import makeMajor from './makeMajor';

const router = Router();
router.get('/getmajor', getmajor);
router.post('/makeMajor', makeMajor);

export default router;
