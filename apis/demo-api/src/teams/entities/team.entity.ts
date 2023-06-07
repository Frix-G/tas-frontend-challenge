import { CountryEnum, ITeam } from 'types';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Player } from '../../players/entities/player.entity';

@Entity()
export class Team implements ITeam {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  commonName: string;

  @Column()
  country: CountryEnum;

  @Column()
  losses: number;

  @Column()
  matchesPlayed: number;

  @Column()
  name: string;

  @Column()
  season: string;

  @Column()
  wins: number;

  @Column()
  lossesAway: number;

  @Column()
  lossesHome: number;

  @Column()
  winsAway: number;

  @Column()
  winsHome: number;

  @OneToMany(() => Player, (player) => player.team, {
    onDelete: 'CASCADE',
  })
  players: Array<Player>;
}
