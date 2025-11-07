module.exports = {
  lintOnSave: false,
  devServer: {
    proxy: {
      '/api': {
        target: 'https://testapi.radarapp.net',
        changeOrigin: true,
        secure: false,
        pathRewrite: { '^/api': '/api' },
      },
    },
  },
};
