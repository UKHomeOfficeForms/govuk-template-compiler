var path = require('path'),
    static = require('serve-static');

module.exports = {
    setup: function (app, assetpath, options) {

        if (arguments.length === 2 && typeof assetpath === 'object') {
            options = assetpath;
            assetpath = '';
        }

        options = options || {};
        assetpath = assetpath || options.path || '/govuk-assets';

        app.use(assetpath, static(path.join(__dirname, './node_modules/govuk_template_mustache/assets'), options));
        app.use(function (req, res, next) {
            res.locals.govukAssetPath = assetpath + '/';
            res.locals.partials = res.locals.partials || {};
            res.locals.partials['govuk-template'] = path.resolve(__dirname, './govuk_template');
            next();
        });

    }
};
