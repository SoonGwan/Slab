import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('ItemList')
export default class ItemList extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @PrimaryColumn({
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({
    length: 255,
    nullable: false,
  })
  explain: string;

  @Column({
    nullable: false,
    length: 255,
  })
  hashTage: string;

  @Column({
    length: 1000,
    nullable: false,
  })
  mainImage: string;
}
