import { Pet } from "../models/petModel";
import { Pets } from "../db/data";

export const getAll = async () => {
  return Pets;
};

export const getById = async (petId: number) => {
  const pet = Pets.find((p) => p.id === petId);
  return pet ? [pet] : [];
};

export const create = async (petProps: Pet) => {
  const isExistPet = Pets.find((pet) => pet.id === petProps.id);

  if (isExistPet) {
    return "Pet already exists.";
  }

  Pets.push(petProps);
  return Pets;
};

export const update = async (petProps: Partial<Pet>, petId: number) => {
  const petIndex = Pets.findIndex((pet) => pet.id === petId);

  if (petIndex !== -1) {
    Pets[petIndex] = { ...Pets[petIndex], ...petProps };
    return "Pet updated successfully.";
  } else {
    return "Pet not found.";
  }
};

export const del = async (petId: number) => {
  const petIndex = Pets.findIndex((pet) => pet.id === petId);

  if (petIndex !== -1) {
    Pets.splice(petIndex, 1);
    return "Pet deleted successfully.";
  } else {
    return "Pet not found.";
  }
};
export default {
  getAll,
  getById,
  create,
  update,
  del,
};
