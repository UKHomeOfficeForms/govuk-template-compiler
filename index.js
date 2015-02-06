var path = require('path'),
    servestatic = require('serve-static');

module.exports = {
    setup: function (app, options) {

        options = options || {};
        options.path = options.path || '/govuk-assets';

        app.use(options.path, servestatic(path.join(__dirname, './node_modules/govuk_template_mustache/assets'), options));
        app.use(function (req, res, next) {
            res.locals.govukAssetPath = options.path + '/';
            res.locals.partials = res.locals.partials || {};
            res.locals.partials['govuk-template'] = path.resolve(__dirname, './govuk_template');
            next();
        });

    }
};
