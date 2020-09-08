import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import logger from '../../../lib/logger';
import TeamList from '../../../entity/TeamList';

export default async (req: Request, res: Response) => {
  const idx: number = Number(req.query.idx);

  if (isNaN(idx)) {
    logger.yellow('팀 수정중 idx 검증 실패');
    res.status(400).json({
      status: 400,
      message: '검증오류',
    });
    return;
  }

  type RequestBody = {
    teamName: string;
    explain: string;
    mainImage: string;
  };

  const data: RequestBody = req.body;

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

    team.teamName = data.teamName || team.teamName;
    team.explain = data.explain || team.explain;
    team.mainImage = data.mainImage || team.mainImage;

    await teamList.save(team);

    logger.green('팀 수정 성공');
    res.status(200).json({
      status: 200,
      message: '팀 수정 성공',
    });
  } catch (error) {
    logger.red('팀 정보 수정중 오류 발생');
  }
};
