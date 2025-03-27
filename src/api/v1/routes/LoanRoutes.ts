import express, { Router } from "express";
import { createLoan, reviewLoan, approveLoan, getLoans } from "../../v1/controllers/LoanController";
import authenticate from "../middleware/authenticate";
import isAuthorized from "../middleware/authorize";

const router: Router = express.Router();

router.post(
    "/",
    authenticate, 
    isAuthorized({ hasRole: ["user"] }),
    createLoan 
);

router.put(
    "/:id/review",
    authenticate, 
    isAuthorized({ hasRole: ["officer"] }), 
    reviewLoan 
);

router.put(
    "/:id/approve",
    authenticate, 
    isAuthorized({ hasRole: ["manager"] }),
    approveLoan 
);

router.get(
    "/",
    authenticate, 
    isAuthorized({ hasRole: ["officer", "manager"] }), 
    getLoans 
);

export default router;