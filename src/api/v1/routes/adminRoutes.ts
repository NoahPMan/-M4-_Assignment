import express, { Router } from "express";
import { setCustomClaims } from "../../v1/controllers/adminControllers";
import authenticate from "../../v1/middleware/authenticate";
import isAuthorized from "../../v1/middleware/authorize";

const router: Router = express.Router();

router.post(
    "/setCustomClaims",
    authenticate,
    //isAuthorized({ hasRole: ["manager"] }),
    setCustomClaims
);

export default router;