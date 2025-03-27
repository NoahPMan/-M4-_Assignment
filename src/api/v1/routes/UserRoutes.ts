import express, { Router } from "express";
import { getUserDetails } from "../controllers/UserController";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router: Router = express.Router();

router.get(
    "/:uid",
    authenticate,
    isAuthorized({ hasRole: ["user"], allowSameUser: true }),
    getUserDetails
);

export default router;