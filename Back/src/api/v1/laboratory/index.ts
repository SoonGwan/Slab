import { Router } from 'express';
import getLaboratory from './getLaboratory';
import makeLaboratory from './makeLaboratory';

const router = Router();
router.get('/getLaboratory', getLaboratory);
router.post('/makeLaboratory', makeLaboratory);

export default router;
