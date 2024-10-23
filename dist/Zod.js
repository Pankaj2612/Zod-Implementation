"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.z = void 0;
class ZodObject {
    constructor(schema) {
        this.schema = schema;
    }
    safeParse(obj) {
        const errorArr = [];
        for (const key in this.schema) {
            const expectedtype = this.schema[key];
            const actualValue = obj[key];
            const actualtype = typeof actualValue;
            if (actualtype !== expectedtype) {
                errorArr.push(key);
            }
        }
        if (errorArr.length > 0) {
            return { success: false, error: errorArr };
        }
        return { success: true, error: null };
    }
}
exports.z = {
    object: (schema) => new ZodObject(schema),
};
//# sourceMappingURL=Zod.js.map