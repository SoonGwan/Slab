import { Request, Response, response } from 'express';
import { getRepository } from 'typeorm';
import TeamList from '../../../entity/TeamList';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  const idx: number = Number(req.query.idx);
  console.log(idx);
  try {
    const teamList = getRepository(TeamList);
    const team: TeamList = await teamList.findOne({
      where: {
        idx,
      },
    });
    if (!team) {
      logger.yellow('팀이 없음');
      res.status(400).json({
        status: 400,
        message: '팀이 없덩',
      });
      return;
    }
    logger.green('팀 상세 정보 조회 성공');
    res.status(200).json({
      status: 200,
      message: '팀 정보 조회성공',
      data: { team },
    });
  } catch (error) {
    logger.red('오류 발생', error.message);
  }
};
