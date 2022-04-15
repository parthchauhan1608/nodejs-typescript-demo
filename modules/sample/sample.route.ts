import { Router } from 'express';
import SampleController from './sample.controller';
import SampleMiddleware from './sample.middleware';

const sampleRoute = Router();

const sampleRouteGet = [
    SampleMiddleware.getSampleCheck,
    SampleController.getSample
];
sampleRoute.get('/', sampleRouteGet);

const sampleRoutePost = [
    SampleMiddleware.postSampleCheck,
    SampleController.postSample
];
sampleRoute.post('/', sampleRoutePost);

const sampleRoutePut = [
    SampleMiddleware.putSampleCheck,
    SampleController.putSample
];
sampleRoute.put('/:id', sampleRoutePut);

const sampleRouteDelete = [
    SampleMiddleware.deleteSampleCheck,
    SampleController.deleteSample
];
sampleRoute.delete('/:id', sampleRouteDelete);

export default sampleRoute;