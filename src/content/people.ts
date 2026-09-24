export type PersonCategory = "Leadership" | "Chairs" | "Advisors" | "Alumni";

export interface Person {
  id: string;
  name: string;
  role: string;
  category: PersonCategory;
  bio: string;
}

export const people: Person[] = [
  {
    id: "p-01",
    name: "Amara Osei",
    role: "Secretary-General",
    category: "Leadership",
    bio: "Started as a first-year delegate in 2019 and has chaired every flagship conference since 2023.",
  },
  {
    id: "p-02",
    name: "Daniel Cho",
    role: "Director of Conferences",
    category: "Leadership",
    bio: "Runs logistics for all 96 conferences and counting — the person who makes the floor actually run on time.",
  },
  {
    id: "p-03",
    name: "Sofia Marchetti",
    role: "Director of Public Speaking",
    category: "Leadership",
    bio: "Built the rhetoric curriculum from a single workshop into a standalone program used by 40+ schools.",
  },
  {
    id: "p-04",
    name: "Wei Zhang",
    role: "Chair, Security Council",
    category: "Chairs",
    bio: "Three-time award-winning delegate turned chair, known for keeping crisis committees honest.",
  },
  {
    id: "p-05",
    name: "Fatima Al-Rashid",
    role: "Chair, Human Rights Council",
    category: "Chairs",
    bio: "Mediated the longest resolution debate in MANGO history — eleven hours, four amendments, one vote.",
  },
  {
    id: "p-06",
    name: "Lucas Ferreira",
    role: "Chair, Economic & Financial Committee",
    category: "Chairs",
    bio: "Former ECOFIN delegate who now writes the background guides new chairs learn from.",
  },
  {
    id: "p-07",
    name: "Dr. Helen Ward",
    role: "Faculty Advisor",
    category: "Advisors",
    bio: "Has advised MANGO since its founding year and still reads every position paper submitted.",
  },
  {
    id: "p-08",
    name: "Marcus Webb",
    role: "Board Advisor",
    category: "Advisors",
    bio: "Brings twenty years of nonprofit governance experience to MANGO's board.",
  },
  {
    id: "p-09",
    name: "Priya Nair",
    role: "Class of 2021",
    category: "Alumni",
    bio: "Now studying international law; credits her first caucus experience with the career change.",
  },
  {
    id: "p-10",
    name: "Tomás Guerrero",
    role: "Class of 2019",
    category: "Alumni",
    bio: "Returned as a volunteer chair for three consecutive years after graduating.",
  },
];
