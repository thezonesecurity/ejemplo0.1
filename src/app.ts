import express, { Express } from "express";
import * as bodyParser from "body-parser";
class App {
    public app: Express = express();
    constructor() {
        this.configuration();
    }
    public configuration() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    public initApp() {
        console.log("LOAD MODULES");
    }
}
export default new App();