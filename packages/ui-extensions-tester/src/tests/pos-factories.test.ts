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

  it('delete returns true for non-existent key', async () => {
    const storage = createStorage();
    expect(await storage.delete('nope')).toBe(true);
  });

  it('clear removes all entries', async () => {
    const storage = createStorage({alpha: 1, beta: 2});
    await storage.clear();
    expect(await storage.get('alpha')).toBeUndefined();
    expect(await storage.get('beta')).toBeUndefined();
  });

  it('entries returns all key-value pairs', async () => {
    const storage = createStorage({width: 10, height: 20});
    const entries = await storage.entries();
    const arr = [...entries];
    expect(arr).toContainEqual(['width', 10]);
    expect(arr).toContainEqual(['height', 20]);
  });

  describe('current', () => {
    it('is defined when created by the factory', () => {
      const storage = createStorage({syncStatus: 'pending'});
      expect(storage.current).toBeDefined();
    });

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
      const storage = createStorage({alpha: 1, beta: 2});
      expect(storage.current.alpha.value).toBe(1);
      await storage.clear();
      expect(storage.current.alpha.value).toBeUndefined();
      expect(storage.current.beta.value).toBeUndefined();
    });

    it('subscribe returns an unsubscribe function', () => {
      const storage = createStorage({key: 'val'});
      const unsubscribe = storage.current.key.subscribe(() => {});
      expect(typeof unsubscribe).toBe('function');
      unsubscribe();
    });

    it('subscribe fires when the value is updated via set', async () => {
      const storage = createStorage({syncStatus: 'pending'});
      const listener = jest.fn();
      storage.current.syncStatus.subscribe(listener);
      await storage.set('syncStatus', 'complete');
      expect(listener).toHaveBeenCalledTimes(1);
      expect(listener).toHaveBeenCalledWith('complete');
    });

    it('subscribe fires with undefined when the key is deleted', async () => {
      const storage = createStorage({syncStatus: 'pending'});
      const listener = jest.fn();
      storage.current.syncStatus.subscribe(listener);
      await storage.delete('syncStatus');
      expect(listener).toHaveBeenCalledTimes(1);
      expect(listener).toHaveBeenCalledWith(undefined);
    });

    it('subscribe fires with undefined for all keys when cleared', async () => {
      const storage = createStorage({alpha: 1, beta: 2});
      const alphaListener = jest.fn();
      const betaListener = jest.fn();
      storage.current.alpha.subscribe(alphaListener);
      storage.current.beta.subscribe(betaListener);
      await storage.clear();
      expect(alphaListener).toHaveBeenCalledWith(undefined);
      expect(betaListener).toHaveBeenCalledWith(undefined);
    });

    it('does not fire a listener after it unsubscribes', async () => {
      const storage = createStorage({syncStatus: 'pending'});
      const listener = jest.fn();
      const unsubscribe = storage.current.syncStatus.subscribe(listener);
      unsubscribe();
      await storage.set('syncStatus', 'complete');
      expect(listener).not.toHaveBeenCalled();
    });

    it('supports multiple subscribers on the same key', async () => {
      const storage = createStorage({syncStatus: 'pending'});
      const first = jest.fn();
      const second = jest.fn();
      storage.current.syncStatus.subscribe(first);
      storage.current.syncStatus.subscribe(second);
      await storage.set('syncStatus', 'complete');
      expect(first).toHaveBeenCalledWith('complete');
      expect(second).toHaveBeenCalledWith('complete');
    });
  });
});
