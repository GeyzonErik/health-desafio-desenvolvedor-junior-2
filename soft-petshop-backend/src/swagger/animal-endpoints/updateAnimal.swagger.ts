export const updateAnimal = {
  tags: ["animal"],
  summary: "Update an animal",
  parameters: [
    {
      in: "path",
      description: "animal id that you want to change",
      name: "animalId",
      required: "true",
      schema: {
        type: "integer",
      },
    },
  ],
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
            },
            age: {
              type: "integer",
              example: 3,
            },
            type: {
              type: "string",
              example: "armadillo",
            },
            breed: {
              type: "string",
              example: "N/A",
            },
            ownerId: {
              type: "integer",
              example: 4,
            },
          },
        },
      },
    },
  },
  responses: {
    "200": {
      description: "Animal successful updated",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/animal",
          },
        },
      },
    },
    "400": { description: "Invalid ID supplied" },
    "404": { description: "Animal not found" },
    "405": { description: "Validation exception" },
  },
};
