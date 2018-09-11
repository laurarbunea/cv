const path = require('path');

const source = path.join(__dirname, '..', 'static_src');
const dist = path.join(__dirname, '..', 'www', 'static');

const prod = process.env.NODE_ENV === 'production';

module.exports = {
    prod: prod,

    paths: {
        source: source,
        dist: dist,
        sass: path.join(source, 'sass'),
        tokens: path.join(source, 'tokens'),
        svg: path.join(source, 'svg'),
        css: path.join(dist, 'css'),
        images: path.join(dist, 'images'),
        content: path.join(__dirname, '..', 'content'),
        www: path.join(__dirname, '..', 'www'),
        views: path.join('.', 'www'),
        templates: path.join('.', 'templates'),
        snippets: path.join('.', 'templates', 'includes')
    },

    PlzOptions: {
        minifier: prod,
        mqpacker: false,
        filters: false,
        rem: true,
        pseudoElements: true,
        opacity: true,
        autoprefixer: {
            browsers: ['ie 8', 'ie 9', '> 1%'],
        },
    },
};
