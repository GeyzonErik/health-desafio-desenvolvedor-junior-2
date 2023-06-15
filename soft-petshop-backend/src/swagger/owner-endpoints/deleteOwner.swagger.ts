export const deleteOwner = {
  tags: ["owner"],
  summary: "Delete an owner by his id",
  parameters: [
    {
      in: "path",
      name: "onwerId",
      description: "Owner id that need to be deleted",
      required: "true",
      schema: {
        type: "integer",
      },
    },
  ],

  responses: {
    "200": { description: "Owner has been successfully deleted" },
    "400": { description: "Invalid id supplied" },
    "404": { description: "Owner not found" },
  },
};
