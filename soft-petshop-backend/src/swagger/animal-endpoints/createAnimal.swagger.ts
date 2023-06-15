export const createAnimal = {
  tags: ["animal"],
  summary: "Create an animal",
  requestBody: {
    description: "created animal object",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "Roberson",
              required: "true",
            },
            age: {
              type: "integer",
              example: 3,
              required: "true",
            },
            type: {
              type: "string",
              example: "armadillo",
              required: "true",
            },
            breed: {
              type: "string",
              example: "N/A",
            },
            ownerId: {
              type: "integer",
              example: 4,
              required: "true",
            },
          },
        },
      },
    },
  },
  responses: {
    "200": {
      description: "Animal successfully created",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/animal",
          },
        },
      },
    },
    "405": { description: "Invalid input" },
  },
};
