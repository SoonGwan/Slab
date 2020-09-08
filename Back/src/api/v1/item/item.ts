import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Item from '../../../entity/ItemList';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  try {
    const itemList = getRepository(Item);
    const list: Item[] = await itemList.find({
      order: {
        idx: 'DESC',
      },
    });
    logger.green('아이템 리스트 조회 성공');
    res.status(200).json({
      status: 200,
      message: '아이템 리스트 조회 성공',
      data: {
        list,
      },
    });
  } catch (error) {
    logger.red('아이템 리스트 조회 서버 오류', error.message);
    res.status(500).json({ status: 500, message: '서버 오류임' });
  }
};
