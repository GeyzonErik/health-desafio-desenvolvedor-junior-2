import { PrismaClient } from '@prisma/client';
import express from 'express';

const cors = require('cors')
const prisma = new PrismaClient();

module.exports = function(app: any) {
    app.use(express.json(), cors({
        origin: "http://localhost:3000"
    }));

    app.get('/owners', async(req: any, res: any) => {
        const owners = await prisma.owner.findMany();
        return res.json(owners);
    })
    
    app.get(`/owner/:id`, async(req: any, res: any) => {
        const { id } = req.params;
        const owner = await prisma.owner.findUnique({ 
            where: { id: Number(id) },
         });
        return res.json(owner);
    })
    
    app.post('/owners', async(req: any, res: any) => {
        const newOwners = await prisma.owner.create({
            data: { ...req.body }
        });
        res.json(newOwners);
    })
    
    app.put('/owner/:id', async(req: any, res: any) => {
        const { id } = req.params;
        const updatedOwner = await prisma.owner.update({
            where: { id: Number(id) },
            data: { ...req.body }
        })
        res.json(updatedOwner);
    })

    app.delete(`/owner/:id`, async(req: any, res: any) => {
        const { id } = req.params;
        const deletedOwner = await prisma.owner.delete({
            where: { id: Number(id) }
        })
        res.json(deletedOwner);
    })

}