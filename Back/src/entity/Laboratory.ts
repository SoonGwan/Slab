import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('Laboratory')
export default class Laboratory extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @PrimaryColumn({
    length: 255,
    nullable: false,
  })
  name: string;

  @PrimaryColumn({
    length: 255,
    nullable: false,
  })
  labName: string;
}
