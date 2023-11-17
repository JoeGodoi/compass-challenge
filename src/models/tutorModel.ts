import { Pet } from "./petModel";

export interface Tutor {
  id: number;
  name: string;
  phone: number;
  email: string;
  date_of_birth: string;
  zipCode: string;
  pets: Pet[];
}
