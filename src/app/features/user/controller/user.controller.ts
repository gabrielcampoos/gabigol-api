import { Request, Response } from "express";
import { httpHelper } from "../../../shared/utils";
import { Result } from "../../../shared/utils/result.helper";
import { CreateUserDto } from "../dto";
import { CreateUserUsecase, ListAllUsersUsecase } from "../usecase";

export class UsersController {
  public static async createUser(req: Request, res: Response) {
    const user: CreateUserDto = req.body;

    try {
      const usecase = new CreateUserUsecase();

      const result = await usecase.execute(user);

      if (!result.success) return httpHelper.badRequestError(res, result);

      return httpHelper.success(res, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        res,
        Result.error(500, error.toString())
      );
    }
  }

  public static async listUsers(req: Request, res: Response) {
    try {
      const usecase = new ListAllUsersUsecase();

      const result = await usecase.execute();

      return httpHelper.success(res, result);
    } catch (error: any) {
      return httpHelper.badRequestError(
        res,
        Result.error(500, error.toString())
      );
    }
  }
}
