import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryGeneratedColumn,
  OneToOne,
  OneToMany,
} from "typeorm";
import { randomUUID } from "crypto";

@Entity({ name: "user" })
export class UserEntity {
  @PrimaryGeneratedColumn("uuid")
  id!: string;

  @Column()
  name!: string;

  @Column()
  gender!: string;

  @Column()
  cpf!: string;

  @Column({ name: "card_number" })
  cardNumber!: string;

  @Column()
  age!: string;

  @Column()
  status!: string;

  @Column({ name: "date_of_birth" })
  dateOfBirth!: Date;

  @BeforeInsert()
  beforeInsert() {
    this.id = randomUUID();
  }
}
