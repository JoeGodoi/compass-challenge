import { Tutor } from "../models/tutorModel";
import { TutorRepository } from "../repositories/tutorRepository";

export const findAllTutors = async () => {
  console.log("Chegou no service");
  const tutorRepository = new TutorRepository();
  const data = await tutorRepository.all();
  return data;
};
export const findById = async (tutorId: number) => {
  const tutorRepository = new TutorRepository();
  const data = await tutorRepository.findById(tutorId);
  return data;
};
export const createTutorService = async (props: Tutor) => {
  const tutorRepository = new TutorRepository();
  const data = await tutorRepository.create(props);
  return data;
};
export const updateTutorService = async (
  tutorId: number,
  props: Partial<Tutor>
) => {
  const tutorRepository = new TutorRepository();
  const data = await tutorRepository.update(tutorId, props);
  return data;
};
export const deleteTutorService = async (tutorId: number) => {
  const tutorRepository = new TutorRepository();
  const data = await tutorRepository.delete(tutorId);
  return data;
};

export default {
  findAllTutors,
  findById,
  createTutorService,
  updateTutorService,
  deleteTutorService,
};
