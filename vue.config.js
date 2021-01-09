const HOST = 'https://rhzone.github.io/pandora';

module.exports = {
  publicPath: process.env.NODE_ENV == 'production' ? HOST : '.',
}