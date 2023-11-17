import { Pets } from "../db/data";
import { Pet } from "../models/petModel";

export class PetRepository {
  async all(): Promise<Pet[]> {
    return Pets;
  }

  async create(props: Pet): Promise<boolean | string> {
    const isExistPet = Pets.find((pet) => pet.id === props.id);

    if (isExistPet) {
      return "Pet already exists.";
    }

    Pets.push(props);
    return true;
  }

  async update(petId: number, props: Partial<Pet>): Promise<string> {
    const petIndex = Pets.findIndex((pet: Pet) => pet.id === petId);

    if (petIndex !== -1) {
      Pets[petIndex] = { ...Pets[petIndex], ...props };
      return "Pet updated successfully.";
    } else {
      return "Pet not found.";
    }
  }

  async delete(petId: number): Promise<string> {
    const petIndex = Pets.findIndex((pet: Pet) => pet.id === petId);

    if (petIndex !== -1) {
      Pets.splice(petIndex, 1);
      return "Pet deleted successfully.";
    } else {
      return "Pet not found.";
    }
  }
}
