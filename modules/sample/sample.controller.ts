import { Request, Response, NextFunction } from 'express';

export default class SampleController {
    public static getSample(_req: Request, _res: Response) {
        console.log("getSampleCheck ");
        return _res.status(200).send({});
    }

    public static postSample(_req: Request, _res: Response) {
        console.log("postSampleCheck ");
        return _res.status(200).send({});
    }

    public static putSample(_req: Request, _res: Response) {
        console.log("putSampleCheck ");
        return _res.status(200).send({});
    }

    public static deleteSample(_req: Request, _res: Response) {
        console.log("deleteSampleCheck ");
        return _res.status(200).send({});
    }
}
