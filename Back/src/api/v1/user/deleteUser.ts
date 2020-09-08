import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import User from '../../../entity/User';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  //   const user: User = req.user;

  try {
    const userRepo = getRepository(User);
    const user: User = await userRepo.findOne({
      where: {
        id: req.body.id,
      },
    });

    if (!user) {
      res.status(404).json({
        status: 404,
        message: '유저리스트 없음',
      });
      return;
    }
    userRepo.remove(user);
    logger.green('유저 삭제 성공');
    res.status(200).json({
      status: 200,
      message: '유저 삭제 성공',
    });
  } catch (error) {
    logger.red('유저 삭제중 오류가 났엉><', error.message);
    res.status(500).json({
      status: 500,
      message: '삭제중 오류난듯 ...',
    });
  }
};
