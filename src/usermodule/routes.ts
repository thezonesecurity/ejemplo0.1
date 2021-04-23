import RoutesController from "./routeController/RoutesController";
import { Express } from "express";
class Routes {
    private routesController: RoutesController;
    private routeparent: string;
    constructor(routeparent: string, app: Express) {
        this.routesController = new RoutesController();
        //app.use(routeparent, app);
        this.routeparent = routeparent;
        this.configureRoutes(app);
    }
    private configureRoutes(app: Express) {
        //creara un usuario nuevo
        app.route(this.routeparent + "/users").post(this.routesController.createUsers);
        //leera la informacion de un conjunto de usuarios
        app.route(this.routeparent + "/users").get(this.routesController.getUsers);
    }
}
export default Routes;