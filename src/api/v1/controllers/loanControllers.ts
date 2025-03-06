import { Request, Response } from "express";
 
export const createLoan = (req: Request, res: Response) => {
    res.json({ message: "Loan created (stub)" });
};
 
export const reviewLoan = (req: Request, res: Response) => {
    res.json({ message: "Loan reviewed (stub)" });
};
 
export const approveLoan = (req: Request, res: Response) => {
    res.json({ message: "Loan approved (stub)" });
};