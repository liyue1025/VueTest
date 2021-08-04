const path = require('path')

module.exports = {
  entry : './src/js/main.js', // 打包入口
  output : {  // 打包出口
    path :  path.resolve(__dirname, 'dist'),
    filename : 'bundle.js' 
  },
  module : {
    rules : [
      {
        test : /\.vue$/,
        use : ['vue-loader']
      }
    ]
  },
  resolve : {
    alias : {
      'vue$' : 'vue/dist/vue.esm.js'
    }
  },
  devServer : {
    contentBase : './dist',
    inline : true, 
    port : 8080
  }
}