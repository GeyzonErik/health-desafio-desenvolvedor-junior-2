import { PrismaClient } from '@prisma/client';
import express from 'express';

const prisma = new PrismaClient();

module.exports = function(app: any) {
    app.use(express.json());

    app.get('/animals', async(req: any, res: any) => {
        const animals = await prisma.animal.findMany();
        return res.json(animals);
    })
    
    app.get(`/animal/:id`, async(req: any, res: any) => {
        const { id } = req.params;
        const animal = await prisma.animal.findUnique({ where: { id: Number(id) } });
        return res.json(animal);
    })
    
    app.post('/animals', async(req: any, res: any) => {
        const newAnimal = await prisma.animal.create({
            data: { ...req.body }
        });
        res.json(newAnimal);
    })
    
    app.put('/animal/:id', async(req: any, res: any) => {
        const { id } = req.params;
        const updatedAnimal = await prisma.animal.update({
            where: { id: Number(id) },
            data: { ...req.body }
        })
        res.json(updatedAnimal);
    })

    app.delete(`/animal/:id`, async(req: any, res: any) => {
        const { id } = req.params;
        const deletedAnimal = await prisma.animal.delete({
            where: { id: Number(id) }
        })
        res.json(deletedAnimal);
    })

}