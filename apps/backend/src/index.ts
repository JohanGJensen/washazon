import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { pool } from "./database";

// routes
import productRoutes from "./routes/products";

config();

const app = express();
const port = parseInt(process.env.PORT!);

app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_HOST!,
    allowedHeaders: ["Origin, Authorization"],
  })
);
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());
app.use("/api", productRoutes);
app.listen(port, () => {
  // pool.connect()
  // .then(() => console.log('database connected!'))
  // .catch((err) => {
  //   console.error('Error connecting to PostgreSQL database', err);
  // });

  console.log(`application is listening on port:${port}`);
});
