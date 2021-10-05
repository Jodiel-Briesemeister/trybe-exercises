// npm i express body-parser express-rescue
// npm i nodemon -D
// npm i cors
// npm install node-fetch

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const userRouter = require('./routers/userRouter');
const postRouter = require('./routers/postRouter');
const teamsRouter = require('./routers/teamsRouter');
const { isValidToken } = require('./middlewares.js/validations');
const errors = require('./routerNotFound');

const PORT = 3000;
const ENDPOINTEXTERNALAPI = 'https://api.coindesk.com/v1/bpi/currentprice/BTC.json';

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/teams', teamsRouter);

app.use('/user', userRouter);

app.get(
  '/btc',
  isValidToken,
  async (_req, res) => {
    try{
      const result = await fetch(ENDPOINTEXTERNALAPI).then((data) => data.json());
      res.status(200).json(result);
    }
    catch (err) {
      res.status(401).json({ "message": "invalid token" });
    }
  }
);

app.use('/posts', postRouter);

app.use('*', (_req, _res, next) => next({ statusCode: 404, message: 'Opsss router not found' }));

app.use(errors.routerNotFound);

app.listen(PORT, () => console.log('Run server http://localhost:3000'));

// node index.js
// http GET :3000/btc authorization:'12345a12345b'
// http POST :3000/user/register username='123' email='test@hotmail.com' password='123456'
// http GET :3000/posts/2
// http POST :3000/teams name='abcdef' initials='ABC' country='country'
// http GET :3000/teams