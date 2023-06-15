export const createOwner = {
  tags: ["owner"],
  summary: "Create an Owner",
  requestBody: {
    description: "Created owner object",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "ownerName",
              required: "true",
            },
            contact: {
              type: "string",
              example: "71912345678",
              required: "true",
            },
          },
        },
      },
    },
  },
  responses: {
    "200": {
      description: "Owner successfully created",
      content: {
        "application/json": {
          schema: {
            $ref: "#/components/schemas/owner",
          },
        },
      },
    },
    "405": { description: "Invalid input" },
  },
};
