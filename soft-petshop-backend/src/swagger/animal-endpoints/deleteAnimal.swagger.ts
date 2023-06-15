export const deleteAnimal = {
  tags: ["animal"],
  summary: "Delete an animal by his id",
  parameters: [
    {
      in: "path",
      name: "animalId",
      description: "Animal id that need to be deleted",
      required: "true",
      schema: {
        type: "integer",
      },
    },
  ],

  responses: {
    "200": { description: "Animal has been successfully deleted" },
    "400": { description: "Invalid id supplied" },
    "404": { description: "Animal not found" },
  },
};
