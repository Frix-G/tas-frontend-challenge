import { DataSource, DataSourceOptions } from 'typeorm';
import { migrations } from './migrations';
import { env } from './env';
import { Team } from './teams';
import { Player } from './players';

export const dataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  url: env.DATABASE_URL,
  entities: [Team, Player],
  migrations,
  synchronize: true,
  extra: {
    ssl:
      process.env.SSL_MODE === 'require'
        ? {
            rejectUnauthorized: false,
          }
        : false,
  },
};

export const appDataSource = new DataSource(dataSourceOptions);

// export default appDataSource;
