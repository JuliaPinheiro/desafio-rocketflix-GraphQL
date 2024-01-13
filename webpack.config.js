const path = require('path');

module.exports = {
  entry: './src/main.js', // o ponto de entrada do seu código
  output: {
    path: path.resolve(__dirname, 'dist'), // o diretório onde o código empacotado será salvo
    filename: 'bundle.js', // o nome do arquivo de saída
  },
  module: {
    rules: [
      {
        test: /\.js$/, // para arquivos .js
        exclude: /node_modules/, // exclui a pasta node_modules
        use: {
          loader: 'babel-loader', // usa o babel-loader para transpilar o código
        },
      },
    ],
  },
  mode: 'development', // o modo do Webpack, pode ser 'development' ou 'production'
};
