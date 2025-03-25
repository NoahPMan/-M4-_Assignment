import app from "./app";

// Import server type definition
import { Server } from "http";

// Initialize port as either a string read from .env or 3000 by default
const PORT: number = parseInt(process.env.PORT || "3000", 10);


const server: Server = app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

export default server;
