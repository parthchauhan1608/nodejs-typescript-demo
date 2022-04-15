import { Request, Response, NextFunction } from 'express';

export default class SampleMiddleware {
    public static getSampleCheck(_req: Request, _res: Response, _next: NextFunction) {
        console.log("getSampleCheck Middleware check");
        _next();
    }

    public static postSampleCheck(_req: Request, _res: Response, _next: NextFunction) {
        console.log("postSampleCheck Middleware check");
        _next();
    }

    public static putSampleCheck(_req: Request, _res: Response, _next: NextFunction) {
        console.log("putSampleCheck Middleware check");
        _next();
    }

    public static deleteSampleCheck(_req: Request, _res: Response, _next: NextFunction) {
        console.log("deleteSampleCheck Middleware check");
        _next();
    }
}
