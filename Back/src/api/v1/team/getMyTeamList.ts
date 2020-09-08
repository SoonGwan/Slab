import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import TeamList from '../../../entity/TeamList';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  const whoMade: string = String(req.query.whoMade);
  console.log(whoMade);
  try {
    const teamList = getRepository(TeamList);

    const myTeam = await teamList.findOne({
      where: {
        whoMade,
      },
    });

    logger.green('내 팀 리스트 조회 성공');
    res.status(200).json({
      status: 200,
      message: '내 팀 정보 조회 성공',
      data: { myTeam },
    });
  } catch (error) {
    logger.red('내 팀 리스트 조회중 오류', error.message);
  }
};
