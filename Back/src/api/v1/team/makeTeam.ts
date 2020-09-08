import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import TeamList from '../../../entity/TeamList';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  type RequestBody = {
    teamName: string;
    explain: string;
    mainImage: string;
    whoMade: string;
  };

  const data: RequestBody = req.body;

  try {
    const teamList = getRepository(TeamList);
    const isExists = await teamList.findOne({
      where: {
        teamName: data.teamName,
        explain: data.explain,
      },
    });

    if (isExists) {
      logger.yellow('이미 있어서 추가 실패');
      res.status(401).json({
        status: 401,
        message: '추가 실패',
      });
      return;
    }

    await teamList.save(data);
    logger.green('팀 추가 성공');
    return res.status(200).json({
      status: 200,
      message: '팀 추가 성공',
    });
  } catch (error) {
    logger.red('팀 만드는중 오류', error.message);
    res.status(500).json({ status: 500, message: '치즈버거' });
  }
};
