import { Tutor } from "../models/tutorModel";
import { Pet } from "../models/petModel";

export const Pets: Pet[] = [];

export const Tutors: Tutor[] = [
  {
    id: 1,
    name: "Luis Godoi",
    phone: 991613497,
    email: "godoijoe@hotmail.com",
    date_of_birth: "2000-03-17",
    zipCode: "86036360",
    pets: [
      {
        id: 1,
        name: "Buddy",
        species: "cachorro",
        carry: "p",
        weight: 6,
        date_of_birth: "2015-01-21",
      },
    ],
  },
];
