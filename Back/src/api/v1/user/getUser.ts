import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../../../entity/User';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  try {
    const userList = getRepository(User);
    const list: User[] = await userList.find({
      order: {
        id: 'DESC',
      },
    });
    logger.green('유저리스트 조회 성공.');
    res.status(200).json({
      status: 200,
      message: '유저 목록 조회 성공',
      data: {
        list,
      },
    });
  } catch (err) {
    logger.red('유저 목록 조회 서버 오류', err.message);
    res.status(500).json({ status: 500, message: '서버오류' });
  }
};
