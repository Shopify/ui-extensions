import {buildStandardLibrary} from '../runtime';

class DataSource {
  private __data: any;

  constructor(initialData: any = {}) {
    this.__data = initialData;
  }

  get = key => {
    return this.__data[key];
  };

  set = (key, value) => {
    this.__data[key] = value;
  };
}

const buildStdLib = (initialData: any) => {
  const dataSource = new DataSource(initialData);
  return {
    dataSource,
    // @ts-ignore
    library: buildStandardLibrary(dataSource),
  };
};

describe('standard library', () => {
  describe('get', () => {
    it('can retrieve values from the data source', () => {
      const {library} = buildStdLib({
        valueOne: 'one',
      });

      expect(library.get('valueOne')).toEqual('one');
    });

    it("can retrieve values from the data source after it's been changed", () => {
      const {library} = buildStdLib({
        valueOne: 'one',
      });

      expect(library.get('valueOne')).toEqual('one');
      library.set('valueOne', 1);
      expect(library.get('valueOne')).toEqual(1);
    });

    it("can retrieves the right value even if it's been externally set", () => {
      const {library, dataSource} = buildStdLib({
        valueOne: 'one',
      });

      expect(library.get('valueOne')).toEqual('one');
      dataSource.set('valueOne', 1);
      expect(library.get('valueOne')).toEqual(1);
    });

    describe('library returns the proper data type', () => {
      it('supports string values', () => {
        const {library} = buildStdLib({
          valueOne: 'one',
        });

        expect(library.get('valueOne')).toEqual('one');
        expect(typeof library.get('valueOne')).toEqual('string');
      });

      it('supports integer values', () => {
        const {library} = buildStdLib({
          int: 1234,
        });

        expect(library.get('int')).toEqual(1234);
        expect(typeof library.get('int')).toEqual('number');
      });

      it('supports boolean values', () => {
        const {library} = buildStdLib({
          bool: true,
        });

        expect(library.get('bool')).toEqual(true);
        expect(typeof library.get('bool')).toEqual('boolean');
      });
    });
  });

  describe('set', () => {
    it('can set new values', () => {
      const {library} = buildStdLib({
        valueOne: 'one',
      });
      library.set('valueTwo', 222);

      expect(library.get('valueOne')).toEqual('one');
      expect(library.get('valueTwo')).toEqual(222);
    });

    it('can overwrite existing values', () => {
      const {library} = buildStdLib({
        valueOne: 'one',
      });

      expect(library.get('valueOne')).toEqual('one');

      library.set('valueOne', 1);

      expect(library.get('valueOne')).toEqual(1);
    });
  });

  describe('if', () => {
    it('will return the true case if the condition is truthy', () => {
      const {library} = buildStdLib({});
      const value = library.if(true, 'true', 'false');
      expect(value).toEqual('true');
    });

    it('will return the false case if the condition is falsy', () => {
      const {library} = buildStdLib({});
      const value = library.if(false, 'true', 'false');
      expect(value).toEqual('false');
    });

    it('will return nothing if the condition is falsy and no falseCase is provided', () => {
      const {library} = buildStdLib({});
      const value = library.if(false, 'true');
      expect(value).toBeUndefined();
    });

    it('will return the true case if a string is provided', () => {
      const {library} = buildStdLib({});
      const value = library.if('false', 'true');
      expect(value).toEqual('true');
    });
  });

  describe('#', () => {
    it('returns a hash out of an array', () => {
      const {library} = buildStdLib({});
      const hash = library['#']('arg1', 'value1', 'arg2', 'value2');
      expect(hash).toEqual({
        arg1: 'value1',
        arg2: 'value2',
      });
    });

    it('supports strings, integers and boolean', () => {
      const {library} = buildStdLib({});
      const hash = library['#']('str', 'value1', 'int', 2, 'bool', true);
      expect(hash).toEqual({
        str: 'value1',
        int: 2,
        bool: true,
      });
    });
  });

  describe('injecting', () => {});
});
