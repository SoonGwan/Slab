import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import logger from '../../../lib/logger';
import User from '../../../entity/User';

export default async (req: Request, res: Response) => {
  // const user: User = req.user;

  const idx: number = Number(req.query.idx);
  console.log(idx);

  if (isNaN(idx)) {
    logger.yellow('검증 오류', 'idx가 nan');
    res.status(400).json({
      status: 400,
      message: '검증 오류',
    });
    return;
  }

  type RequestBody = {
    id: string;
    pw: string;
    email: string;
    name: string;
  };

  const data: RequestBody = req.body;

  try {
    const userRepo = getRepository(User);
    const user: User = await userRepo.findOne({
      where: {
        idx,
      },
    });
    if (!user) {
      logger.yellow('유저가 없음');
      res.status(400).json({
        status: 400,
        message: '유저가 없음',
      });
      return;
    }
    user.id = data.id || user.id;
    user.name = data.name || user.name;
    user.email = data.email || user.email;
    user.pw = data.pw || user.pw;
    await userRepo.save(user);

    logger.green('유저 정보 수정 성공');
    res.status(200).json({
      status: 200,
      message: '유저 정보 수정 성공',
    });
  } catch (error) {
    logger.red('유저 정보 수정중 오류 발생', error.message);
    res.status(500).json({ status: 500, message: '서버오류' });
  }
};
