import express from 'express';

export default class TestController {
    public getNome = (req: express.Request, res: express.Response) : express.Response => {
        return res.status(200).json('tudo certo');
    }
}