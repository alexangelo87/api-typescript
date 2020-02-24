import express from 'express';
import Test from './routes/testRoute';

class App {
    public express: express.Application;
    constructor() {
        this.express = express();
        this.routes();
    }

    public routes(): void {
        this.express.use('/teste', new Test().testRouter);
    }
}

new App().express.listen(8000, ()=> {
    console.log("running...")
});