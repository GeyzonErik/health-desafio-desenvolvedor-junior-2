export const getAnimals = {
  tags: ["animal"],
  summary: "Returns a list of all animals",
  responses: {
    "200": {
      description: "a JSON array of animals",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/animal",
          },
        },
      },
    },
  },
};
