# Zod Implementation

This is a mini implementation of the Zod library for dynamic type checking in TypeScript. The library provides a simple way to define schemas for objects and validate them against these schemas, focusing on primitive types such as string, number, and boolean.

## Features

- Define object schemas using `z.object()`
- Validate objects against defined schemas using `safeParse()`
- Collects all type errors in validation results

## Installation

Clone the repository and install the dependencies:

```bash
git clone https://github.com/Pankaj2612/Zod-Implementation.git
cd Zod-Implementation
npm init -y
npm install typescript --save-dev
npx tsc --init
npx tsc
node dist/index.js
```

Result
![Zod](https://github.com/user-attachments/assets/4e18a3e3-3389-4bc6-8118-2e6f56e30da0)


