type Schema = {
  [key: string]: "string" | "number" | "boolean";
};

class ZodObject {
  schema: Schema;
  constructor(schema: Schema) {
    this.schema = schema;
  }

  safeParse(obj: { [key: string]: unknown }) {
    const errorArr: string[] = [];
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

export const z = {
  object: (schema: Schema) => new ZodObject(schema),
};
