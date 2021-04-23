import { Request, Response } from "express";
class RoutesController {
    constructor() {

    }
    public async createUsers(request: Request, response: Response) {
        return response.status(200).json({ server: "HOLA MUNDO Soy un mensaje post" });
    }
    public async getUsers(request: Request, response: Response) {
        return response.status(200).json({ server: "HOLA MUNDO Soy un mensaje get" });
    }
}
export default RoutesController;