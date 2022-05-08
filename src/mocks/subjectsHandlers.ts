import { rest } from "msw";

// Handles a GET /subjects request
export const getSubjects = rest.get("/subjects", (req, res, ctx) => {
  return res(
    ctx.delay(1000),
    ctx.status(200),
    ctx.json([
      { class: "SW22", name: "Testing", studentsCount: 10, id: 1 },
      {
        class: "DS22",
        name: "Databases for developers",
        studentsCount: 20,
        id: 2,
      },
      { class: "KYS", name: "Design class", studentsCount: 31, id: 3 },
      { class: "AB20", name: "Web Development", studentsCount: 24, id: 4 },
      { class: "DI21", name: "Security", studentsCount: 76, id: 5 },
      { class: "DI21i", name: "Testing nr 1", studentsCount: 41, id: 6 },
      { class: "WW3", name: "eCommerce", studentsCount: 18, id: 7 },
    ])
  );
});

// Handle a GET for class codes
export const getClassCode = rest.get("/class-code/:id", (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({code: "JFASSMDA"})
  );
});

export const deleteClassCode = rest.delete("/class-code/:id", (req, res, ctx) => {
  return res(
    ctx.status(200)
  )
});
