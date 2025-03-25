import { Request, Response } from "express";
import { HTTP_STATUS } from "../../../constants/httpConstant";
import { successResponse } from "../models/responseModel"; 

export const createLoan = (req: Request, res: Response): void => {
    res.status(HTTP_STATUS.CREATED).json(successResponse({}, "Loan created successfully"));
};

export const reviewLoan = (req: Request, res: Response): void => {
    res.status(HTTP_STATUS.OK).json(successResponse({}, "Loan reviewed successfully"));
};

export const approveLoan = (req: Request, res: Response): void => {
    res.status(HTTP_STATUS.OK).json(successResponse({}, "Loan approved successfully"));
};

export const getLoans = (req: Request, res: Response): void => {
    res.status(HTTP_STATUS.OK).json(successResponse({}, "List of loans"));
};