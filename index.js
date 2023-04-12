import express from 'express';
import bodyParser from 'body-parser';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.post('/', bodyParser.json(), async (req, res) => {
    const { body } = req;
    const { url } = body;
    const responce = await fetch(url);
    const data = await responce.text();

    res.json({ htmlText: data });
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
