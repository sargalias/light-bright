module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',

    //
    /*
      webpack alias options
      see https://jestjs.io/docs/en/webpack.html#configuring-jest-to-find-our-files
      e.g. '^components/(.*)$': '<rootDir>/src/components/$1'
    */
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};
