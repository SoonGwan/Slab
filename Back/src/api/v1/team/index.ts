import { Router } from 'express';
import getTeam from './getTeam';
import makeTeam from './makeTeam';
import getMyTeam from './getMyTeamList';
import infoTeam from './infoTeam';

const router = Router();
router.get('/getTeam', getTeam);
router.post('/makeTeam', makeTeam);
router.get('/getMyTeam', getMyTeam);
router.get('/infoTeam', infoTeam);

export default router;
