import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../../../entity/User';
import { verifyToken } from '../../../lib/token';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  const token = await req.headers['x-access-token'];

  try {
    const userInfo = await verifyToken(token.toString());
    let id = userInfo.id;
    const userlist = await getRepository(User);
    const list = await userlist.findOne({
      where: {
        id,
      },
    });

    logger.green('유저 정보 조회 성공');
    res.status(200).json({ status: 200, message: '조회성공', data: { list } });
  } catch (error) {
    logger.red('로그인 오류 설마 이게 ?', error.message);
    res.status(500).json({
      status: 500,
      message: '설마 이게?',
    });
  }
};
