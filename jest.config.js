module.exports = {
    preset: 'ts-jest',
    testEnvironment: 'jsdom',
    moduleFileExtensions: ['js', 'jsx', 'ts', 'tsx', 'vue'],
    transform: {
      '^.+\\.vue$': 'vue-jest',
      '^.+\\.(js|ts)?$': 'ts-jest',
    },
    transformIgnorePatterns: ['/node_modules/'],
  };
  