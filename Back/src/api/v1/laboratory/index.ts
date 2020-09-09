import { Router } from 'express';
import getLaboratory from './getLaboratory';
import makeLaboratory from './makeLaboratory';
import modifyLaboratory from './modifyLaboratory';
import myApplyLaboratory from './myApplyLaboratory';
import allLoboratory from './allLoboratory';

const router = Router();
router.get('/getLaboratory', getLaboratory);
router.post('/makeLaboratory', makeLaboratory);
router.put('/modifyLaboratory', modifyLaboratory);
router.get('/myApplyLaboratory', myApplyLaboratory);
router.get('/allLaboratory', allLoboratory);

export default router;
