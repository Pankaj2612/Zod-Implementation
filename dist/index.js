"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const Zod_1 = require("./Zod");
const schema = Zod_1.z.object({
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
//# sourceMappingURL=index.js.map