export interface IPlayer {
  id: number;
  fullName: string;
  age: number;
  position: string;
  goalsOverall: number;
  minutesPlayedOverall: number;
}

export type ICreatePlayer = Omit<IPlayer, 'id'>;
