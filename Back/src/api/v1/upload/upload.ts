import { Response } from 'express';
import logger from '../../../lib/logger';

export default async (request, response: Response) => {
  try {
    const reqFiles = await request.files;
    console.log(reqFiles);
    logger.red('파일 오류', reqFiles);
    const files: string[] = [];

    reqFiles.forEach((reqFile) => {
      files.push(reqFile.filename);
    });

    logger.green('파일 업로드 성공.');
    response.status(200).json({
      message: '파일 업로드 성공.',
      data: {
        files,
      },
    });
  } catch (error) {
    logger.red('파일 업로드 중 오류 발생', error.message);
  }
};
