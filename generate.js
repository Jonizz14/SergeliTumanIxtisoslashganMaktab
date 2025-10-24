import { faker } from "@faker-js/faker";
import fs from "fs";

const TOTAL_STUDENTS = 540;
const STUDENTS_PER_CLASS = 25;
const TOTAL_CLASSES = 24;
const TOTAL_TEACHERS = 50;

const students = [];
const classes = [];
const teachers = [];
const news = [];
const anons = [];
const additions = [];
const principals = [];
const talentedStudents = [];


principals.push({
  id: 1,
  firstName: faker.person.firstName(),
  lastName: faker.person.lastName(),
  photo: faker.image.avatar(),
  position: "Director",
  biography: faker.lorem.paragraphs({ min: 2, max: 4 })
});

for (let i = 2; i <= 6; i++) {
  principals.push({
    id: i,
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    photo: faker.image.avatar(),
    position: faker.helpers.arrayElement([
      "Deputy Director",
      "Academic Principal",
      "Administrative Principal",
    ]),
    biography: faker.lorem.paragraphs({ min: 2, max: 4 })
  });
}


let studentId = 1;

for (let i = 1; i <= TOTAL_CLASSES; i++) {
  const grade = faker.number.int({ min: 5, max: 11 });
  const section = faker.string.alpha({ length: 1, casing: "upper" });

  classes.push({
    id: i,
    name: `${grade}-${section}`,
    grade,
    room: faker.number.int({ min: 100, max: 400 }).toString(),
    teacherId: i,
    studentIds: [],
  });

  for (let j = 0; j < STUDENTS_PER_CLASS; j++) {
    students.push({
      id: studentId,
      firstName: faker.person.firstName(),
      lastName: faker.person.lastName(),
      age: faker.number.int({ min: 12, max: 18 }),
      gender: faker.helpers.arrayElement(["M", "F"]),
      classId: i,
    });

    classes[i - 1].studentIds.push(studentId);
    studentId++;
  }
}


for (let i = TOTAL_CLASSES + 1; i <= TOTAL_TEACHERS; i++) {
  teachers.push({
    id: i,
    photo: faker.image.avatar(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    subject: faker.helpers.arrayElement([
      "Matematika", "Fizika", "Ingliz tili", "Tarix", "Kimyo",
      "Biologiya", "Geografiya", "Rus tili", "Informatika"
    ]),
    classIds: [],
    biography: faker.lorem.paragraphs({ min: 2, max: 4 })
  });
}


for (let i = 1; i <= 12; i++) {
  news.push({
    id: i,
    image: faker.image.urlPicsumPhotos({ width: 800, height: 400 }),
    title: faker.lorem.sentence(5),
    description: faker.lorem.paragraph(3),
    date: faker.date.recent({ days: 30 }).toISOString().split("T")[0],
  });
}


for (let i = 1; i <= 5; i++) {
  const startDate = faker.date.recent({ days: 10 });
  const endDate = faker.date.soon({ days: 10, refDate: startDate });

  anons.push({
    id: i,
    image: faker.image.urlPicsumPhotos({ width: 800, height: 400 }),
    title: faker.lorem.words(5),
    description: faker.lorem.sentence(10),
    startDate: startDate.toISOString().split("T")[0],
    endDate: endDate.toISOString().split("T")[0],
    time: "12:00 AM - 2:00 PM",
  });
}


const CLUB_NAMES = [
  "Robototexnika",
  "Ingliz tili speaking club",
  "Rasm chizish to‘garagi",
  "Shaxmat to‘garagi",
  "Matematika klubi",
  "IT va dasturlash to‘garagi",
  "Sport (futbol, voleybol)",
  "Drama (teatr san’ati)",
];

for (let i = 1; i <= CLUB_NAMES.length; i++) {
  const randomTeacher = faker.helpers.arrayElement(teachers);

  additions.push({
    id: i,
    name: CLUB_NAMES[i - 1],
    description: faker.lorem.paragraph(3),
    teacherId: randomTeacher.id,
    teacherName: randomTeacher.firstName + " " + randomTeacher.lastName,
    teacherPhoto: randomTeacher.photo,
    teacherSubject: randomTeacher.subject,
    teacherBiography: randomTeacher.biography,
    image: faker.image.urlPicsumPhotos({ width: 800, height: 400 }),
  });
}


for (let i = 1; i <= 10; i++) {
  talentedStudents.push({
    id: i,
    image: faker.image.urlPicsumPhotos({ width: 400, height: 400 }),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    biography: faker.lorem.paragraphs({ min: 2, max: 3 })
  });
}


const db = {
  principals,
  teachers,
  classes,
  students,
  news,
  anons,
  additions,
  talentedStudents, 
};

fs.writeFileSync("db.json", JSON.stringify(db, null, 2), "utf-8");
console.log("✅ db.json tayyor!");
