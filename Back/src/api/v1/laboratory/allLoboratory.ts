import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Laboratory from '../../../entity/Laboratory';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  try {
    const laboratoryList = getRepository(Laboratory);
    const list = await laboratoryList.find({
      order: {
        idx: 'DESC',
      },
    });
    logger.green('랩실 조회 성공');
    res.status(200).json({
      status: 200,
      message: '랩실 조회 성공',
      data: {
        list,
      },
    });
  } catch (error) {
    logger.red('랩실 조회중 오류 발생', error.message);
    return error;
  }
};
