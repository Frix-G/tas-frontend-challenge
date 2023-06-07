import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateDB1686089450288 implements MigrationInterface {
  name = 'CreateDB1686089450288';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `CREATE TABLE "player" ("id" SERIAL NOT NULL, "fullName" character varying NOT NULL, "age" integer NOT NULL, "position" character varying NOT NULL, "goalsOverall" integer NOT NULL, "minutesPlayedOverall" integer NOT NULL, "teamId" integer, CONSTRAINT "PK_65edadc946a7faf4b638d5e8885" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `CREATE TABLE "team" ("id" SERIAL NOT NULL, "commonName" character varying NOT NULL, "country" character varying NOT NULL, "losses" integer NOT NULL, "matchesPlayed" integer NOT NULL, "name" character varying NOT NULL, "season" character varying NOT NULL, "wins" integer NOT NULL, "lossesAway" integer NOT NULL, "lossesHome" integer NOT NULL, "winsAway" integer NOT NULL, "winsHome" integer NOT NULL, CONSTRAINT "PK_f57d8293406df4af348402e4b74" PRIMARY KEY ("id"))`,
    );
    await queryRunner.query(
      `ALTER TABLE "player" ADD CONSTRAINT "FK_e85150e7e8a80bee7f2be3adab0" FOREIGN KEY ("teamId") REFERENCES "team"("id") ON DELETE RESTRICT ON UPDATE NO ACTION`,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.query(
      `ALTER TABLE "player" DROP CONSTRAINT "FK_e85150e7e8a80bee7f2be3adab0"`,
    );
    await queryRunner.query(`DROP TABLE "team"`);
    await queryRunner.query(`DROP TABLE "player"`);
  }
}
