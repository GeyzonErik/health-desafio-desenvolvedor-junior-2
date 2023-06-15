export const getOwnerById = {
  tags: ["owner"],
  summary: "Return an owner by id",
  parameters: [
    {
      in: "path",
      name: "onwerId",
      description: "owner id",
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
            $ref: "#/components/schemas/owner",
          },
        },
      },
    },
    "400": { description: "Invalid ID supplied" },
    "404": { description: "Owner not found" },
  },
};
