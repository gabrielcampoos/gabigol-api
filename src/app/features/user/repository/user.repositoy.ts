import { DatabaseConnection } from "../../../../main/database/typeorm.connection";
import { User } from "../../../models";
import { UserEntity } from "../../../shared/entities";
import { CreateUserDto } from "../dto";

export class UsersRepository {
  private _manager = DatabaseConnection.connection.manager;

  public async checkIfUserExistsByCpf(cpf: string): Promise<User | null> {
    const existingUser = await this._manager.findOneBy(UserEntity, {
      cpf,
    });

    if (!existingUser) return null;

    return this.entityToModel(existingUser);
  }

  public async register(user: CreateUserDto): Promise<User> {
    const createUser = this._manager.create(UserEntity, { ...user });

    const createdUser = await this._manager.save(createUser);

    return this.entityToModel(createdUser);
  }

  public async listUsers(): Promise<User[]> {
    const userList = await this._manager.find(UserEntity, {});

    return userList.map((u) => this.entityToModel(u));
  }

  private entityToModel(dataFromDB: UserEntity): User {
    return new User(
      dataFromDB.id,
      dataFromDB.name,
      dataFromDB.gender,
      dataFromDB.cpf,
      dataFromDB.cardNumber,
      dataFromDB.age,
      dataFromDB.status,
      dataFromDB.dateOfBirth
    );
  }
}
