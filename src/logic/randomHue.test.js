import randomHue from './randomHue';

describe('randomHue', () => {
  test('should generate a hue value between 0 and 359', () => {
    // eslint-disable-next-line
    for (let i = 0; i < 1000; i++) {
      expect(randomHue()).toBeGreaterThanOrEqual(0);
      expect(randomHue()).toBeLessThan(360);
    }
  });

  test('should generate numbers randomly', () => {
    const numberSet = new Set();
    // eslint-disable-next-line
    for (let i = 0; i < 1000; i++) {
      numberSet.add(randomHue());
    }
    expect(numberSet.size).toBeGreaterThan(50);
  });
});
