import {Request, Response}from 'express'
import { container } from 'tsyringe';
import { ListUserUseCase } from './ListUsersUseCase'; 

class ListUserControlller {
   
    async handle(request: Request, response:Response): Promise<Response>{
        const listUserUseCase = container.resolve(ListUserUseCase);

        const all = await listUserUseCase.execute();

        return response.json(all);
    }
}

export {ListUserControlller}