module.exports = {
  entry: {
    'index': './src/main/ts/LibraryB.ts'
  },
  output: {
    path: './target/dist/',
    filename: '[name].js',
    library: 'LibraryB',
    libraryTarget: 'this'
  },
  externals: {
    'library-a/src/main/ts/LibraryA': 'LibraryA'
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
