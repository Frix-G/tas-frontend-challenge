import dotenv from 'dotenv';

const envFilePath = '../../.env';

dotenv.config({ path: envFilePath });

class Env {
  get POSTGRES_USER(): string {
    return this.getEnvVariableValue('POSTGRES_USER');
  }

  get POSTGRES_PASSWORD(): string {
    return this.getEnvVariableValue('POSTGRES_PASSWORD');
  }

  get POSTGRES_PORT(): string {
    return this.getEnvVariableValue('POSTGRES_PORT');
  }

  get POSTGRES_DB(): string {
    return this.getEnvVariableValue('POSTGRES_DB');
  }

  get DATABASE_URL(): string {
    return `postgres://${this.POSTGRES_USER}:${this.POSTGRES_PASSWORD}@localhost:${this.POSTGRES_PORT}/${this.POSTGRES_DB}`;
  }

  private getEnvVariableValue(
    name: string,
    isMandatory: boolean = true,
    defaultValue: string = '',
  ) {
    const value = process.env[name];

    if (isMandatory && !value) {
      throw Error(`env variable ${name} must be provided`);
    }

    return value || defaultValue;
  }
}

export const env = new Env();
