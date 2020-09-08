import {
  Entity,
  Column,
  PrimaryColumn,
  BaseEntity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('user')
export default class User extends BaseEntity {
  @PrimaryGeneratedColumn()
  idx: number;

  @PrimaryColumn({
    length: 255,
    nullable: false,
  })
  id: string;

  @Column({
    length: 255,
    nullable: false,
  })
  pw: string;

  @Column({
    length: 255,
    nullable: false,
  })
  name: string;

  @Column({
    length: 255,
    nullable: false,
    unique: true,
  })
  email: string;

  @Column({
    default: false,
    nullable: false,
  })
  is_admin: boolean;
}
