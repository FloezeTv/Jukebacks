require('../globals.js');
const path = require('path');
const express = require('express');
const app = express();

const DEFAULT_PORT = 5000;

// the built website
app.use(express.static(path.join(__basename, 'build/frontend')));

const router = express.Router();

router.get('/', (req, res) => {
    res.send('Hello World!')
});

app.use('/api', router);

const server = app.listen(process.env.PORT || DEFAULT_PORT, () => console.log(`App listening on ${server.address().address}:${server.address().port}`));
const getURL = (subdir = '/') => new URL(subdir, 'http://localhost:' + server.address().port);

module.exports = exports = {
    server: server,
    getURL: getURL,
}