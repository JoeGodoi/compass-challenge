import express, { Express } from "express";
import tutorRoutes from "./routes/tutorRoutes";
import petRoutes from "./routes/petRoutes";

const app: Express = express();
const PORT = 3000;

app.use(express.json());
app.use("/", tutorRoutes);
app.use("/", petRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
