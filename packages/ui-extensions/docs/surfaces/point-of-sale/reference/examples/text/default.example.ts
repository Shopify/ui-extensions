import {
  extension,
  Screen,
  ScrollView,
  Text,
} from '@shopify/ui-extensions/point-of-sale';

export default extension(
  'pos.home.modal.render',
  (root) => {
    const mainScreen = root.createComponent(
      Screen,
      {name: 'text', title: 'Text'},
    );
    const scrollView =
      root.createComponent(ScrollView);

    scrollView.append(
      root.createComponent(
        Text,
        {variant: 'body'},
        'body',
      ),
    );
    scrollView.append(
      root.createComponent(
        Text,
        {variant: 'captionMedium'},
        'captionMedium',
      ),
    );
    scrollView.append(
      root.createComponent(
        Text,
        {variant: 'captionRegular'},
        'captionRegular',
      ),
    );
    scrollView.append(
      root.createComponent(
        Text,
        {variant: 'captionRegularTall'},
        'captionRegularTall',
      ),
    );
    scrollView.append(
      root.createComponent(
        Text,
        {variant: 'display'},
        'display',
      ),
    );
    scrollView.append(
      root.createComponent(
        Text,
        {variant: 'headingLarge'},
        'headingLarge',
      ),
    );
    scrollView.append(
      root.createComponent(
        Text,
        {variant: 'headingSmall'},
        'headingSmall',
      ),
    );
    scrollView.append(
      root.createComponent(
        Text,
        {variant: 'sectionHeader'},
        'sectionHeader',
      ),
    );
    scrollView.append(
      root.createComponent(
        Text,
        {
          variant: 'headingSmall',
          color: 'TextCritical',
        },
        'TextCritical',
      ),
    );
    scrollView.append(
      root.createComponent(
        Text,
        {
          variant: 'headingSmall',
          color: 'TextHighlight',
        },
        'TextHighlight',
      ),
    );
    scrollView.append(
      root.createComponent(
        Text,
        {
          variant: 'headingSmall',
          color: 'TextInteractive',
        },
        'TextInteractive',
      ),
    );
    scrollView.append(
      root.createComponent(
        Text,
        {
          variant: 'headingSmall',
          color: 'TextNeutral',
        },
        'TextNeutral',
      ),
    );
    scrollView.append(
      root.createComponent(
        Text,
        {
          variant: 'headingSmall',
          color: 'TextSubdued',
        },
        'TextSubdued',
      ),
    );
    scrollView.append(
      root.createComponent(
        Text,
        {
          variant: 'headingSmall',
          color: 'TextSuccess',
        },
        'TextSuccess',
      ),
    );
    scrollView.append(
      root.createComponent(
        Text,
        {
          variant: 'headingSmall',
          color: 'TextWarning',
        },
        'TextWarning',
      ),
    );

    mainScreen.append(scrollView);
    root.append(mainScreen);
  },
);
