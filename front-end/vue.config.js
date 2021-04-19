module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      "/gateway": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        pathRewrite: {
          "^/gateway": ""
        }
      }
    }
  },
}