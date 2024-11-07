import { Router } from "express";
import { UsersController } from "./controller/user.controller";

export default () => {
  const router = Router();

  router.post("/user", UsersController.createUser);

  router.get("/user", UsersController.listUsers);

  return router;
};
