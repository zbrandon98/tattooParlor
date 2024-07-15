import express, { Request, Response } from 'express';
import cors from 'cors';
import 'dotenv/config'
import helloPage from './routes/helloPage';

const app = express();
const port = process.env.BACKEND_PORT;

app.use(cors());
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!');
  });
  
  app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
    });
app.use('/helloPage', helloPage);
