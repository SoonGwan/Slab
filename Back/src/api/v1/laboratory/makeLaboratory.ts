import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Laboratory from '../../../entity/Laboratory';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  type RequestBody = {
    name: string;
    labName: string;
  };
  const data: RequestBody = req.body;

  try {
    const laboratoryList = getRepository(Laboratory);
    const isExists = await laboratoryList.findOne({
      where: {
        name: data.name,
        labName: data.labName,
      },
    });
    if (isExists) {
      res.status(401).json({
        status: 401,
        message: '이미 있는 랩실입니다.',
      });
      return;
    }
    await laboratoryList.save(data);
    logger.green('랩실 추가 성공');
    return res.status(200).json({
      status: 200,
      message: '서버 추가 성공',
    });
  } catch (error) {
    logger.red('랩실 만들기중 오류 발생', error.message);
    return res.status(500).json({
      status: 500,
      message: '서버 오류',
    });
  }
};
