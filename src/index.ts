import { z } from "./Zod";

const schema = z.object({
  name: "string",
  age: "number",
  isActive: "boolean",
});
const result = schema.safeParse({
  name: "John",
  age: 30,
  isActive: true,
});

const result2 = schema.safeParse({
  name: "John",
  age: "30",
  isActive: "yes",
});

console.log("Result = > ", result);
console.log("Result 2 => ", result2);
