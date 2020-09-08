import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../../../entity/User';
import { createToken } from '../../../lib/token';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  type RequestBody = {
    id: string;
    pw: string;
  };

  const { id, pw }: RequestBody = req.body;
  console.log(req.body);
  try {
    const userRepo = getRepository(User);
    const isExists = await userRepo.findOne({
      where: {
        id,
        pw,
      },
    });
    if (!isExists) {
      logger.yellow('인증 실패');
      res.status(401).json({ status: 401, message: '인증 실패' });
      return;
    }
    const token = await createToken(isExists.id);
    logger.green('로그인 성공');
    res.status(200).json({
      status: 200,
      message: '로그인 성공',
      data: {
        'x-access-token': token,
      },
    });
  } catch (err) {
    logger.red('로그인 오류 설마 이게 ?', err.message);
    res.status(500).json({
      status: 500,
      message: '설마 이게?',
    });
  }
};
