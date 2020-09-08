import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  PrimaryColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity('UserList')
export class UserList {
  @PrimaryGeneratedColumn()
  idx: number;

  @PrimaryColumn({
    length: 255,
    nullable: false,
  })
  user_id: string;

  @Column({
    length: 255,
    nullable: false,
  })
  user_name: string;

  @Column({
    length: 255,
    nullable: false,
  })
  user_email: string;

  @Column({
    length: 255,
    nullable: false,
  })
  user_pw: string;

  @Column('timestamp')
  @CreateDateColumn()
  user_time: Date;
}
