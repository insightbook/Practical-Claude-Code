import { describe, it, expect } from 'vitest';
import { add, subtract, multiply, divide } from './example';

describe('Math operations', () => {
  describe('add', () => {
    it('양수를 더하면 올바른 결과가 반환된다', () => {
      // Given: 준비
      const a = 2;
      const b = 3;
      // When: 실행
      const result = add(a, b);
      // Then: 검증
      expect(result).toBe(5);
    });
    it('음수를 더하면 올바른 결과가 반환된다', () => {
      // Given: 준비
      const a = -2;
      const b = 3;
      // When: 실행
      const result = add(a, b);
      // Then: 검증
      expect(result).toBe(1);
    });
  });

  describe('subtract', () => {
    it('양수를 빼면 올바른 결과가 반환된다', () => {
      // Given: 준비
      const a = 5;
      const b = 3;
      // When: 실행
      const result = subtract(a, b);
      // Then: 검증
      expect(result).toBe(2);
    });
  });

  describe('multiply', () => {
    it('양수를 곱하면 올바른 결과가 반환된다', () => {
      // Given: 준비
      const a = 2;
      const b = 3;
      // When: 실행
      const result = multiply(a, b);
      // Then: 검증
      expect(result).toBe(6);
    });
    it('0을 곱하면 0이 반환된다', () => {
      // Given: 준비
      const a = 5;
      const b = 0;
      // When: 실행
      const result = multiply(a, b);
      // Then: 검증
      expect(result).toBe(0);
    });
  });

  describe('divide', () => {
    it('양수로 나누면 올바른 결과가 반환된다', () => {
      // Given: 준비
      const a = 6;
      const b = 3;
      // When: 실행
      const result = divide(a, b);
      // Then: 검증
      expect(result).toBe(2);
    });
    it('0으로 나누면 에러가 발생(throw)한다', () => {
      // Given: 준비
      const a = 5;
      const b = 0;
      // When/Then: 실행 및 검증
      expect(() => divide(a, b)).toThrow('Division by zero is not allowed');
    });
  });
});
