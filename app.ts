import * as express from 'express';
import route from './routes';
const app = express();
const port = 3000;

app.use(route);
app.listen(port, () => {
    console.log(`Timezones by location application is running on port ${port}.`);
});