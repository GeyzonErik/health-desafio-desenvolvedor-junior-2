export const getAnimalById = {
  tags: ["animal"],
  summary: "Return an animal by id",
  parameters: [
    {
      in: "path",
      name: "animalId",
      description: "animal id",
      required: "true",
      schema: {
        type: "integer",
      },
    },
  ],
  responses: {
    "200": {
      description: "successful operation",
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
  },
};
