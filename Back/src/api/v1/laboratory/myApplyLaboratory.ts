import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Laboratory from '../../../entity/Laboratory';
import logger from '../../../lib/logger';
import { verifyToken } from '../../../lib/token';

export default async (req: Request, res: Response) => {
  const token = await req.headers['x-access-token'];

  try {
    const userInfo = await verifyToken(token.toString());
    let whoMade = userInfo.id;
    const laboratoryList = getRepository(Laboratory);
    const list = await laboratoryList.find({
      where: {
        whoMade,
      },
    });
    console.log(list);
    logger.green('내가 신청한 랩실 가져옴');
    res.status(200).json({
      status: 200,
      message: '내가 신청한 랩실 들고옴',
      data: {
        list,
      },
    });
  } catch (error) {
    logger.red('내가 신청한 랩실 들고오다가 죽음', error.message);
    res.status(500).json({ status: 500, message: '서버오류' });

    return error;
  }
};
