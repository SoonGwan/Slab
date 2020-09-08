import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('TeamList')
export default class TeamList extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @PrimaryColumn({
    length: 255,
    nullable: false,
  })
  teamName: string;

  @PrimaryColumn({
    length: 25500,
    nullable: false,
  })
  explain: string;

  @Column({
    length: 1000,
    nullable: false,
  })
  mainImage: string;

  @Column({
    length: 255,
    nullable: false,
  })
  whoMade: string;
}
