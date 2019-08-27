const express = require('express');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req,res) => res.send('API is working!'))

app.listen(PORT, ()=> console.log(`Something is working on ${PORT}`));