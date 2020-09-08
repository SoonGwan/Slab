import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import logger from '../../../lib/logger';
import User from '../../../entity/User';

export default async (req: Request, res: Response) => {
  type RequestBody = {
    id: string;
    pw: string;
    name: string;
    email: string;
  };
  const data: RequestBody = req.body;
  console.log(data);

  try {
    const userRepo = await getRepository(User);
    const isExists: User = await userRepo.findOne({
      where: {
        id: data.id,
        email: data.email,
      },
    });
    console.log(isExists);

    if (isExists) {
      logger.yellow('중복된 아이디 아님 이메일');
      res
        .status(409)
        .json({ status: 409, message: '중복된 아이디 혹은 이메일' });
      return;
    }

    await userRepo.save(data);
    logger.green('회원가입 성공');
    return res.status(200).json({ status: 200, message: '회원가입 성공' });
  } catch (error) {
    logger.red('오류올오유ㅗㅇ류ㅗㅇ유로ㅠ', error.message);
    return res.status(500).json({ status: 500, message: '서버오류' });
  }
};
