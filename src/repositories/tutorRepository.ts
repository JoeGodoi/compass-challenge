import { Tutors } from "../db/data";
import { Tutor } from "../models/tutorModel";

export class TutorRepository {
  findById(tutorId: number) {
    const tutor = Tutors.find((tutor) => tutor.id === tutorId);
    if (!tutor) {
      throw new Error("Tutor not found.");
    }
    return tutor;
  }
  delete(tutorId: number) {
    const tutorIndex = Tutors.findIndex((tutor) => tutor.id === tutorId);
    if (!tutorIndex) {
      throw new Error("Tutor not found.");
    }
    Tutors.splice(tutorIndex, 1);
    return Tutors;
  }
  async all() {
    console.log("Chegou no Repository");
    return Tutors;
  }

  async create(props: Tutor) {
    const tutors = await this.all();
    const isExistTutor = tutors?.find((tutor) => {
      tutor.id === props.id;
    });

    if (isExistTutor) {
      return "Tutor existent.";
    }

    return Tutors.push(props);
  }
  async update(tutorId: number, props: Partial<Tutor>) {
    console.log(tutorId, props);
    const tutorIndex = Tutors.findIndex((tutor: Tutor) => tutor.id === tutorId);
    if (Tutors[tutorIndex]) {
      Tutors[tutorIndex] = { ...Tutors[tutorIndex], ...props };
      return "TTutor atualizado com sucesso.";
    } else {
      return "Tutor inexistente.";
    }
  }
}
