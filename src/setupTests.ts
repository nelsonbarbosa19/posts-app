import '@testing-library/jest-dom';
import 'jest-environment-jsdom';

// Mock fetch globally
global.fetch = jest.fn();

// Reset all mocks after each test
afterEach(() => {
  jest.clearAllMocks();
});

/**
 * Jest's test environment doesn't include the TextEncoder and TextDecoder APIs that are available
 * in modern browsers. This is a common issue when testing React Router v6.
 * To fix it, is necessary to mock the TextEncoder and TextDecoder APIs.
 */
class MockTextEncoder {
  encode(input: string): Uint8Array {
    const arr = new Uint8Array(input.length);
    for (let i = 0; i < input.length; i++) {
      arr[i] = input.charCodeAt(i);
    }
    return arr;
  }
}

class MockTextDecoder {
  decode(input?: Uint8Array): string {
    if (!input) return '';
    return String.fromCharCode.apply(null, Array.from(input));
  }
}

Object.defineProperty(global, 'TextEncoder', {
  value: MockTextEncoder,
});

Object.defineProperty(global, 'TextDecoder', {
  value: MockTextDecoder,
});
