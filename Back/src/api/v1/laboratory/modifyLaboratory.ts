import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import logger from '../../../lib/logger';
import Laboratory from '../../../entity/Laboratory';

export default async (req: Request, res: Response) => {
  const idx: number = Number(req.query.idx);

  type ReqeustBody = {
    isHave: string;
    date: string;
    whoMade: string;
  };
  const data: ReqeustBody = req.body;

  try {
    const laboratoryList = getRepository(Laboratory);
    const laboratory = await laboratoryList.findOne({
      where: {
        idx,
      },
    });
    laboratory.isHave = data.isHave || laboratory.isHave;
    laboratory.date = data.date || laboratory.date;
    laboratory.whoMade = data.whoMade || laboratory.whoMade;

    await laboratoryList.save(laboratory);
    logger.green('랩실 수정완료');

    res.status(200).json({
      status: 200,
      message: '랩실 수정완료',
    });
  } catch (error) {
    return error;
  }
};
