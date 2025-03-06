import express from "express";
import morgan from "morgan";
import loanRoutes from "./api/v1/routes/LoanRoutes";
 
const app = express();
app.use(express.json());
app.use(morgan("dev"));
 
app.use("/api/v1/loans", loanRoutes);
 
app.get("/", (req, res) => {
    res.send("High-Risk Loan Monitoring System API");
});
 
export default app;