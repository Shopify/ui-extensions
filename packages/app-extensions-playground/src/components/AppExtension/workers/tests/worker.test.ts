import {load} from '../worker';

describe('worker', () => {
  describe('load', () => {
    let importScripts;
    let evalSpy;

    beforeEach(() => {
      importScripts = jest.fn();
      evalSpy = jest.fn();

      Object.defineProperty(global, 'importScripts', {value: importScripts, writable: true});
      Object.defineProperty(global, 'eval', {value: evalSpy, writable: true});
    });

    afterEach(() => {
      Object.defineProperty(global, 'importScripts', {value: undefined, writable: true});
      Object.defineProperty(global, 'eval', {value: undefined, writable: true});
    });

    it('calls importScripts if JS url is provided', () => {
      const url = 'https://my-script.js';
      load(url);

      expect(importScripts).toHaveBeenCalledWith(url);
      expect(evalSpy).not.toHaveBeenCalledWith(url);
    });

    it('does not call importScripts if non-JS url is provided', () => {
      const url = 'https://my-script.css';
      load(url);

      expect(importScripts).not.toHaveBeenCalledWith(url);
      expect(evalSpy).not.toHaveBeenCalledWith(url);
    });

    it('evaluate script if text is provided', () => {
      const script = 'console.log("hi");';
      load(script);

      expect(importScripts).not.toHaveBeenCalledWith(script);
      expect(evalSpy).toHaveBeenCalledWith(script);
    });
  });
});
