import { Router } from 'express';
import moduleRoute from './modules';

const route = Router();
route.use('/', moduleRoute);

export default route;
