module.exports = {
  moduleNameMapper: {
    '\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$':
      '<rootDir>/__mocks__/fileMock.js',
    '\\.(css|less|scss)$': 'identity-obj-proxy',

    '^components/(.*)$': '<rootDir>/src/components/$1',
    '^utilities/(.*)$': '<rootDir>/src/utilities/$1',
    '^testUtils$': '<rootDir>/testUtils',
  },
  coverageThreshold: {
    global: {
      branches: 90,
      functions: 90,
      lines: 90,
    },
  },
};
