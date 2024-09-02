import "reflect-metadata";
import { createConnection } from "typeorm";

createConnection().then(() => {
  // Start your application here
  console.log("Database connected");
}).catch(error => console.log("Database connection error:", error));
