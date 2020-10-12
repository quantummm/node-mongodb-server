import { Router } from "express";

import register from "./register";
import login from "./login";
import profile from "./profile";
import zodiac from "./zodiac";

const routes = Router();

routes.use(register);
routes.use(login);
routes.use(profile);
routes.use(zodiac);

export default routes;
