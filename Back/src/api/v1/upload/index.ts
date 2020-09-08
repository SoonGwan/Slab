import { Router } from 'express';
import * as multer from 'multer';
import upload from './upload';
import generateUUID from '../../../lib/generateUUID';
import * as path from 'path';

const storage = multer.diskStorage({
  destination: (_req, _file, cb) => {
    cb(null, './public/');
  },
  filename: (_req, file, cb) => {
    cb(null, `${generateUUID()}${path.extname(file.originalname)}`);
  },
});

const options = {
  storage,
};

const uploadMid = multer(options) as any;
const router = Router();
router.post('/', uploadMid.array('files'), upload);

export default router;
