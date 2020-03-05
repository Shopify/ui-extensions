import {render} from './worker';

export default (extensionPoint: any, data: any, components: any, channel: any) => {
  return render(extensionPoint, data, components, channel);
};
