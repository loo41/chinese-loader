import path from 'path';
import webpack from 'webpack';

export default () => {
  const compiler = webpack({
    mode: 'development',
    entry: path.resolve(__dirname, '../src/index.js'),
    output: {
      filename: 'index.js',
      path: path.resolve(__dirname, '../dist')
    },
    module: {
      rules: [
        {
          test: /\.js$/,
          loader: path.resolve(__dirname, '../index.js'),
          options: {
            ECMAscript: false,
            custom: [['😀', 'let']] 
          }
        }
      ]
    }
  });

  // compiler.outputFileSystem = new memoryfs();

  return new Promise((resolve, reject) => {
    compiler.run((err, stats) => {
      if (err || stats.hasErrors()) reject(err);

      resolve(stats);
    });
  });
};