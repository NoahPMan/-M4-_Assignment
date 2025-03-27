import { Request, Response } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstant";
import { successResponse } from "../models/responseModel"; 

// Loan creation (user only)
export const createLoan = (req: Request, res: Response): void => {
    res.status(HTTP_STATUS.CREATED).json(successResponse({}, "Loan created successfully"));
};

// Loan review (officer only)
export const reviewLoan = (req: Request, res: Response): void => {
    res.status(HTTP_STATUS.OK).json(successResponse({}, "Loan reviewed successfully"));
};

// Loan approval (manager only)
export const approveLoan = (req: Request, res: Response): void => {
    res.status(HTTP_STATUS.OK).json(successResponse({}, "Loan approved successfully"));
};

// Get loan list (officer and manager only)
export const getLoans = (req: Request, res: Response): void => {
    res.status(HTTP_STATUS.OK).json(successResponse({}, "List of loans"));
};