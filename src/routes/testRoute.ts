import express from 'express';
import TestController from '../controllers/testController'

export default class Test {
    public testRouter = express.Router().get("/", new TestController().getNome);
}
