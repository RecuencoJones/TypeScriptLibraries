module.exports = {
  entry: {
    'index': './src/main/ts/LibraryA.ts'
  },
  output: {
    path: './target/dist/',
    filename: '[name].js',
    library: 'LibraryA',
    libraryTarget: 'this'
  },
  externals: {
  },
  module: {
    loaders: [
      {
        test: /\.tsx?$/,
        loader: 'ts-loader'
      }
    ]
  },
  resolve: {
    extensions: ['.ts', '.js', '.tsx', '.jsx', '']
  },
  devtool: 'inline-source-map',
  ts: {
    compilerOptions: {
      declaration: false
    }
  }
};
