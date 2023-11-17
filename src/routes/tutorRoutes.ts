import express, { Router } from "express";
import TutorController from "../controllers/tutorController";

const tutorRoutes: Router = express.Router();

tutorRoutes.get("/tutors", TutorController.getAll);
tutorRoutes.get("/tutor/:id", TutorController.getById);
tutorRoutes.post("/tutor", TutorController.create);
tutorRoutes.put("/tutor/:id", TutorController.update);
tutorRoutes.delete("/tutor/:id", TutorController.delete);

export default tutorRoutes;
