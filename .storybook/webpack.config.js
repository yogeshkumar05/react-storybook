const path = require('path');

module.exports = {
    module: {
        rules: [
            {
                test: /.s[ac]ss$/,
                loaders: ['style-loader', 'css-loader', 'sass-loader'],
                include: path.resolve(__dirname, '../')
            }
        ]
    }
}