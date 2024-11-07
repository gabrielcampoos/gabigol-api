import { Result, ResultDto } from "../../../shared/utils/result.helper";
import { UsersRepository } from "../repository";

export class ListAllUsersUsecase {
  public async execute(): Promise<ResultDto> {
    const repository = new UsersRepository();

    const usersFromDB = await repository.listUsers();
    const users = usersFromDB.map((user) => user.toJson());

    return Result.success(200, "Registered users.", users);
  }
}
