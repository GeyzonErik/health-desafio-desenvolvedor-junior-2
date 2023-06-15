export const getOwners = {
  tags: ["owner"],
  summary: "Returns a list of all owners.",
  responses: {
    "200": {
      description: "a JSON array of owners",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/owner",
          },
        },
      },
    },
  },
};
