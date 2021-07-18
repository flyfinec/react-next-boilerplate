import express from 'express';
import cors from 'cors';

const app = express();

// cors
const corsOptions = {
  origin: 'http://localhost:3000',
  credentials: true,
}
app.use(cors(corsOptions));

// json
app.use(express.json());

app.get('/mock-api/healthz', (req, res) => {
  res.json({
    message: 'hello mock api!',
  });
});

app.listen(3000, () => {
  console.log('Mock api app listening on port 3000!');
});
