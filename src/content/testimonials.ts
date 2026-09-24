export interface Testimonial {
  id: string;
  quote: string;
  name: string;
  context: string;
}

export const testimonials: Testimonial[] = [
  {
    id: "t-01",
    quote:
      "The first time I held the floor without my voice shaking, it was because of a drill someone made me repeat forty times.",
    name: "Priya Nair",
    context: "Alumna, Class of 2021",
  },
  {
    id: "t-02",
    quote:
      "Nobody hands you the room here. You argue for it, committee by committee.",
    name: "Wei Zhang",
    context: "Chair, Security Council",
  },
  {
    id: "t-03",
    quote:
      "I came for the debate and stayed for the eleven-hour resolution that taught me what compromise actually costs.",
    name: "Fatima Al-Rashid",
    context: "Chair, Human Rights Council",
  },
  {
    id: "t-04",
    quote:
      "MANGO is the only place I've been where being the youngest person in the room was never a disadvantage.",
    name: "Tomás Guerrero",
    context: "Alumnus, Class of 2019",
  },
];
