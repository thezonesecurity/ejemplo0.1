import express, { Express } from "express";
import * as bodyParser from "body-parser";
import UserModules from "./modules/usermodule/init";
class App {
    public app: Express = express();
    constructor() {
        this.configuration();
        this.connectDatabase();
        this.initApp();
    }
    public connectDatabase() {
        console.log("database ok");
    }
    public configuration() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    public initApp() {
        console.log("LOAD MODULES");
        const userModule = new UserModules("/api", this.app);
    }
}
export default new App();