import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Major from '../../../entity/Major';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  type RequestBody = {
    title: string;
    writer: string;
    content: string;
  };

  const data: RequestBody = req.body;

  try {
    const majorList = getRepository(Major);
    const isExists = await majorList.findOne({
      where: {
        title: data.title,
      },
    });
    if (isExists) {
      res.status(401).json({
        status: 401,
        message: '같은 타이틀이 이미 존재합ㄴ디ㅏ.',
      });
    }

    await majorList.save(data);
    logger.green('전공 게시글을 추가하였습니다.');
    return res.status(200).json({
      status: 200,
      message: '게시글 추가 성공',
    });
  } catch (error) {
    logger.red('전공 리스트 만드는중 오류 발생', error.message);
  }
};
