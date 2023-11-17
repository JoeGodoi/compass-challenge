import { Request, Response } from "express";
import {
  createTutorService,
  deleteTutorService,
  findAllTutors,
  findById,
  updateTutorService,
} from "../services/tutorServices";
import { Tutors } from "../db/data";

class TutorController {
  async getAll(req: Request, res: Response) {
    console.log("Chegou no Controller");
    try {
      const tutors = await findAllTutors();
      return res.status(200).json(tutors);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }

  async getById(req: Request, res: Response) {
    try {
      const tutorId = Number(req.params.id);
      const tutor = await findById(tutorId);
      if (Tutors) {
        res.status(200).json(tutor);
      } else {
        res.status(404).json({ message: "Tutor not found" });
      }
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }

  async create(req: Request, res: Response) {
    try {
      const tutorData = req.body;
      const newTutor = await createTutorService(tutorData);
      res.status(200).json(newTutor);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }

  async update(req: Request, res: Response) {
    try {
      const tutorId = Number(req.params.id);
      const updateTutorProps = req.body;
      const update = await updateTutorService(tutorId, updateTutorProps);
      res.status(200).json(update);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }

  async delete(req: Request, res: Response) {
    try {
      const tutorId = Number(req.params.id);
      const result = await deleteTutorService(tutorId);
      res.status(200).json(result);
    } catch (error: any) {
      res.status(400).json(error.message);
    }
  }
}

export default new TutorController();
