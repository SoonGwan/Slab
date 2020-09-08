import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';
@Entity('Major')
export default class Major extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @PrimaryColumn({
    length: 255,
    nullable: false,
  })
  title: string;

  @PrimaryColumn({
    length: 255,
    nullable: false,
  })
  writer: string;

  @Column({
    length: 255,
  })
  type: string;
}
