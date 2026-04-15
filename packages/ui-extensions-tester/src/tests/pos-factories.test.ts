import {createStorage} from '../point-of-sale';

describe('createStorage', () => {
  it('set and get round-trips a value', async () => {
    const storage = createStorage();
    await storage.set('key1', 'hello');
    expect(await storage.get('key1')).toBe('hello');
  });

  it('get returns undefined for missing keys', async () => {
    const storage = createStorage();
    expect(await storage.get('missing')).toBeUndefined();
  });

  it('initializes with provided values', async () => {
    const storage = createStorage({theme: 'dark', count: 42});
    expect(await storage.get('theme')).toBe('dark');
    expect(await storage.get('count')).toBe(42);
  });

  it('delete removes a key and returns true', async () => {
    const storage = createStorage({key1: 'val'});
    expect(await storage.delete('key1')).toBe(true);
    expect(await storage.get('key1')).toBeUndefined();
  });

  it('delete returns false for non-existent key', async () => {
    const storage = createStorage();
    expect(await storage.delete('nope')).toBe(false);
  });

  it('clear removes all entries', async () => {
    const storage = createStorage({a: 1, b: 2});
    await storage.clear();
    expect(await storage.get('a')).toBeUndefined();
    expect(await storage.get('b')).toBeUndefined();
  });

  it('entries returns all key-value pairs', async () => {
    const storage = createStorage({x: 10, y: 20});
    const entries = await storage.entries();
    const arr = [...entries];
    expect(arr).toContainEqual(['x', 10]);
    expect(arr).toContainEqual(['y', 20]);
  });

  describe('current', () => {
    it('provides subscribable access to stored values', () => {
      const storage = createStorage({syncStatus: 'pending'});
      expect(storage.current.syncStatus.value).toBe('pending');
    });

    it('reflects updates made via set', async () => {
      const storage = createStorage({syncStatus: 'pending'});
      await storage.set('syncStatus', 'complete');
      expect(storage.current.syncStatus.value).toBe('complete');
    });

    it('returns undefined for keys that do not exist', () => {
      const storage = createStorage<{missing: string}>();
      expect(storage.current.missing.value).toBeUndefined();
    });

    it('returns undefined after key is deleted', async () => {
      const storage = createStorage({syncStatus: 'pending'});
      expect(storage.current.syncStatus.value).toBe('pending');
      await storage.delete('syncStatus');
      expect(storage.current.syncStatus.value).toBeUndefined();
    });

    it('returns undefined after clear', async () => {
      const storage = createStorage({a: 1, b: 2});
      expect(storage.current.a.value).toBe(1);
      await storage.clear();
      expect(storage.current.a.value).toBeUndefined();
      expect(storage.current.b.value).toBeUndefined();
    });

    it('subscribe returns an unsubscribe function', () => {
      const storage = createStorage({key: 'val'});
      const unsubscribe = storage.current.key.subscribe(() => {});
      expect(typeof unsubscribe).toBe('function');
      unsubscribe();
    });
  });
});
