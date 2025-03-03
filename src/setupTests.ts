import '@testing-library/jest-dom';
import 'jest-environment-jsdom';

// Setup DOM elements before any tests run
beforeAll(() => {
  // Create root element
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);

  // Create modal root
  const modalRoot = document.createElement('div');
  modalRoot.id = 'modal-root';
  document.body.appendChild(modalRoot);
});

// Clean up after each test
afterEach(() => {
  // Clear all content
  document.body.innerHTML = '';

  // Recreate root elements
  const root = document.createElement('div');
  root.id = 'root';
  document.body.appendChild(root);

  const modalRoot = document.createElement('div');
  modalRoot.id = 'modal-root';
  document.body.appendChild(modalRoot);
});

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
