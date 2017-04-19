'use strict';

const path = require('path');
const express = require('express');

const app = express();

app.engine('html', require('hogan-express'));
app.set('view engine', 'html');
app.set('views', path.resolve(__dirname, 'views'));

app.use(require('hmpo-govuk-template'));
app.get('*', (req, res) => {
    res.render('index');
});

app.listen(3000);
