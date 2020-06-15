import {createRemoteComponent} from '../../utilities';

export interface HeadingProps {
  id?: string;
}

export const Heading = createRemoteComponent<'Heading', HeadingProps>(
  'Heading',
);
