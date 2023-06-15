export const updateOwner = {
  tags: ["owner"],
  summary: "Update an owner",
  parameters: [
    {
      in: "path",
      description: "Owner id that you want to change",
      name: "onwerId",
      required: "true",
      schema: {
        type: "integer",
      },
    },
  ],
  requestBody: {
    description: "update an owner in the system",
    content: {
      "application/json": {
        schema: {
          type: "object",
          properties: {
            name: {
              type: "string",
              example: "Jhon Doe",
            },
            contact: {
              type: "string",
              example: "81915976348",
            },
          },
        },
      },
    },
  },
  responses: {
    "200": {
      description: "Owner successful updated",
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
    "405": { description: "Validation exception" },
  },
};
