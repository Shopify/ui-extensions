import {createWorkerFactory} from '@shopify/react-web-worker';

const createWorker = createWorkerFactory(() => import('./3pWorker'));

export type Worker = ReturnType<typeof createWorker>;
