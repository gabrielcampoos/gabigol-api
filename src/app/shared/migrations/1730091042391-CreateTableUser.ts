import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateTableUser1730091042391 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        name: "user",
        columns: [
          {
            name: "id",
            type: "uuid",
            isPrimary: true,
          },
          {
            name: "name",
            type: "varchar",
            length: "100",
          },
          {
            name: "gender",
            type: "varchar",
          },
          {
            name: "cpf",
            type: "varchar",
            length: "11",
            isUnique: true,
          },
          {
            name: "card_number",
            type: "varchar",
          },
          {
            name: "age",
            type: "varchar",
          },
          {
            name: "status",
            type: "varchar",
          },
          {
            name: "date_of_birth",
            type: "date",
          },
        ],
      })
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable("user");
  }
}
