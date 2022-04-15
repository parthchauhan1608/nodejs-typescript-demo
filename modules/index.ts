// Dependencies
import { Router } from 'express';
import sampleRoute from './sample/sample.route';

const moduleRoute = Router();
moduleRoute.use('/sample', sampleRoute);

export default moduleRoute;
