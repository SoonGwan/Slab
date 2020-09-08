import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Major from '../../../entity/Major';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  try {
    const majorList = getRepository(Major);
    const list = await majorList.find({
      order: {
        idx: 'DESC',
      },
    });
    logger.green('전공 리스트 조회 성공');
    res.status(200).json({
      status: 200,
      message: '전공 리스트 조회성공',
      data: {
        list,
      },
    });
  } catch (error) {
    logger.red('전공 리스트 조회중 올ㅍ', error.message);
  }
};
