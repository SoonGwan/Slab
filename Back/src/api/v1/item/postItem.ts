import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import Item from '../../../entity/ItemList';
import logger from '../../../lib/logger';

export default async (req: Request, res: Response) => {
  type RequestBody = {
    name: string;
    explain: string;
    hashTage: string;
    mainImage: string;
  };

  const data: RequestBody = req.body;

  try {
    const ItemList = getRepository(Item);
    const isExists = await ItemList.findOne({
      where: {
        name: data.name,
        explain: data.explain,
      },
    });
    console.log(isExists);
    if (isExists) {
      logger.yellow('추가 실패');
      res.status(401).json({
        status: 401,
        message: '추가 실패',
      });
      return;
    }
    await ItemList.save(data);
    logger.green('아이템 추가 완료');
    return res.status(200).json({
      status: 200,
      message: '포스트 아이템에 무언가 추가됨',
    });
  } catch (error) {
    logger.red('포스트 아이템 이거 뭔가 있다 ㄹㅇ', error.message);

    res.status(500).json({
      status: 500,
      message: '포스트 아이템 이거 뭔가 있는것 같다 오류 임',
    });
  }
};
