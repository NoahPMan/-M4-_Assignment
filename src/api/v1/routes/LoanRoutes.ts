import { Router } from "express";
import { createLoan, reviewLoan, approveLoan } from "../controllers/loanControllers";
 
const router = Router();
 
router.post("/create", createLoan);
router.post("/review", reviewLoan);
router.post("/approve", approveLoan);
 
export default router;