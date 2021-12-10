module.exports = {
  presets: ['@babel/preset-ev'],
  plugins: [
    ['@babel/plugin-transform-runtime']
  ]
}

// export: 내보내기
// perset: 일일이 명시해야하는 자바스크립트의 기능 지원
// plugins: 비동기 처리를 위해서 설치(async 등 )