// 개발서버를 만들기위해서 구성옵션을 작성해줘야함

// import
const path = require('path');
// nodejs에서 언제든 가져올 수있는 path라는 전역변수를 할당
const HtmlPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')


// export
module.exports = {
  // parcel index.html 처럼 webpack는 자바스크립트 파일을 읽음
  // entry: 파일을 읽으들이기 시작하는 진입점 설정 
  entry: './js/main.js',

  // output: 결과물(번들)을 반환하는 설정
  // path: 번들러를 동작을 시키면 어떠한 경로에 결과물을 만들어서 내어줄것인지
  output: {
    // resolve: 첫번째 인수와 두번째 인수를 합쳐줌
    // __dirname: 전역변수(현재파일이 있는 경로를 지칭)
    // path: path.resolve(__dirname, 'dist'),
    // filename: 'main.js', // 만들어질 파일 설정
    clean: true // 기존에 있던 파일 제거
  },

  module: {
    rules: [
      {
        // .css라는 확장자로 끝나는 것을 찾음
        test: /\.s?css$/,
        use: [ // 밑일수록 먼저해석, 순서중요 
          'style-loader', // html 파일에 해석된 내용을 삽입
          'css-loader', // js에서 css파일을 해석하는 용도
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.js$/,
        use: [
          'babel-loader' // babel요소들을 해석하는 용도
        ]
      }
    ]
  },

  //번들링 후 결과물의 처리 방식 등 다양한 플러그인들을 설정
  plugins: [
    new HtmlPlugin({
      template: './index.html'
    }),
    new CopyPlugin({
      patterns: [
        {from: 'static'}
      ]
    })
  ],

  devServer: {
    host: 'localhost'
  }
}