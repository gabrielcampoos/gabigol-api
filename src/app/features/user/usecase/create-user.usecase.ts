import { Result, ResultDto } from "../../../shared/utils/result.helper";
import { CreateUserDto } from "../dto";
import { UsersRepository } from "../repository";

export class CreateUserUsecase {
  public async execute(data: CreateUserDto): Promise<ResultDto> {
    const usersRepository = new UsersRepository();

    const existingUser = await usersRepository.checkIfUserExistsByCpf(data.cpf);
    if (existingUser) return Result.error(400, "User already registered.");

    const newUser = await usersRepository.register(data);

    return Result.success(200, "User successfully created.", newUser.toJson());
  }
}
