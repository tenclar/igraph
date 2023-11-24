import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entities/User";

class UpdateUserController {

    async handle(req: Request, res: Response) {
        try {
            const userId = req.params.id;
            const {quantidade} = req.body;
        }
    }
}