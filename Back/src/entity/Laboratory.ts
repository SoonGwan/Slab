import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
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

  @Column({
    nullable: false,
  })
  date: string;

  @Column({
    nullable: false,
  })
  isHave: string;

  @Column({
    length: 255,
    nullable: false,
  })
  whoMade: string;
}
