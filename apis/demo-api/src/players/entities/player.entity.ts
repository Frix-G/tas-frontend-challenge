import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Team } from '../../teams';
import { IPlayer } from 'types';

@Entity()
export class Player implements IPlayer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column()
  age: number;

  @Column()
  position: string;

  @Column()
  goalsOverall: number;

  @Column()
  minutesPlayedOverall: number;

  @ManyToOne(() => Team, (team) => team.players, {
    onDelete: 'RESTRICT',
  })
  team: Team;
}
