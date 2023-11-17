import { Request, Response } from "express";
import PetService from "../services/petService";

class PetController {
  async getAll(req: Request, res: Response) {
    const result = await PetService.getAll();
    return res.status(200).json(result);
  }

  async getById(req: Request, res: Response) {
    const petId: number = Number(req.params.id);
    const result = await PetService.getById(petId);
    return res.status(200).json(result);
  }

  async create(req: Request, res: Response) {
    const result = await PetService.create(req.body);
    return res.status(200).json(result);
  }

  async update(req: Request, res: Response) {
    const petId: number = Number(req.params.id);
    const result = await PetService.update(req.body, petId);
    return res.status(200).json(result);
  }

  async delete(req: Request, res: Response) {
    const petId: number = Number(req.params.id);
    const result = await PetService.del(petId);
    return res.status(200).json(result);
  }
}

module.exports = new PetController();
