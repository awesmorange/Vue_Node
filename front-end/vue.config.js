module.exports = {
  "transpileDependencies": [
    "vuetify"
  ],
  devServer: {
    proxy: {
      "/application": {
        target: "http://localhost:3000/",
        changeOrigin: true,
        pathRewrite: {
          "^/application": ""
        }
      }
    }
  },
}