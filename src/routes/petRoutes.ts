import express, { Router } from "express";
const PetController = require("../controllers/petController");

export const petRoutes: Router = Router();

petRoutes.get("/", PetController.getAll);
petRoutes.get("/:id", PetController.getById);
petRoutes.post("/", PetController.create);
petRoutes.put("/:id", PetController.update);
petRoutes.delete("/:id", PetController.delete);

export default petRoutes;
