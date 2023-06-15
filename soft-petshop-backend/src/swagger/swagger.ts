import { getOwners } from "./owner-endpoints/getOwners.swagger";
import { getOwnerById } from "./owner-endpoints/getOwnerById.swagger";
import { createOwner } from "./owner-endpoints/createOwner.swagger";
import { updateOwner } from "./owner-endpoints/updateOwner.swagger";
import { deleteOwner } from "./owner-endpoints/deleteOwner.swagger";

import { createAnimal } from "./animal-endpoints/createAnimal.swagger";
import { getAnimals } from "./animal-endpoints/getAnimals.swagger";
import { getAnimalById } from "./animal-endpoints/getAnimalById.swagger";
import { updateAnimal } from "./animal-endpoints/updateAnimal.swagger";
import { deleteAnimal } from "./animal-endpoints/deleteAnimal.swagger";

export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "soft-petshop API",
    description: "A simple petshop api",
    version: "0.1",
  },
  paths: {
    "/owners": {
      post: createOwner,
      get: getOwners,
    },
    "/owner/{onwerId}": {
      get: getOwnerById,
      put: updateOwner,
      delete: deleteOwner,
    },
    "/animals": {
      post: createAnimal,
      get: getAnimals,
    },
    "/animal/{animalId}": {
      get: getAnimalById,
      put: updateAnimal,
      delete: deleteAnimal,
    },
  },
  components: {
    schemas: {
      owner: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 1,
          },
          name: {
            type: "string",
            example: "Pablo Sorreia",
          },
          contact: {
            type: "string",
            example: "15912345678",
          },
        },
      },
      animal: {
        type: "object",
        properties: {
          id: {
            type: "integer",
            example: 4,
          },
          name: {
            type: "string",
            example: "Fuu",
          },
          age: {
            type: "integer",
            example: 2,
          },
          type: {
            type: "string",
            example: "weasel",
          },
          breed: {
            type: "string",
            example: "amazon weasel",
          },
          ownerId: {
            type: "integer",
            example: 4,
          },
        },
      },
    },
  },
};
