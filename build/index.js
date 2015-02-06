var Hogan = require('hogan.js'),
    fs = require('fs'),
    path = require('path'),
    govukConfig = require('./config'),
    compiledTemplate,
    govukTemplate;

govukTemplate = fs.readFileSync( path.resolve( __dirname, '../node_modules/govuk_template_mustache/views/layouts/govuk_template.html' ), { encoding : 'utf-8' });
compiledTemplate = Hogan.compile(govukTemplate);
fs.writeFileSync( path.resolve( __dirname, '../govuk_template.html' ), compiledTemplate.render(govukConfig), { encoding : 'utf-8' });
