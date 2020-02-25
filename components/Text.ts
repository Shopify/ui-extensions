/**
 * Text style enhances text with additional visual meaning. For example, using subdued text to de-emphasize it from its surrounding text.
 * @property text Text value to display
 * @property size Size of the text. Defaults to Medium
 * @property style The style of the font 
 * @property color The color of the text. Defaults to Primary
 * @property alignment Text alignment. Defaults to left aligned
 */
interface Text {
    children: React.ReactNode;
    size?: TextSize;
    style?: Style;
    color?: Color;
    alignment?: Alignment;
}

enum TextSize {
    Small, Medium, TitleSmall, TitleMedium, TitleLarge, TitleExtraLarge
}

enum Alignment {
    Left, Right, Center, Justify
}

enum Style {
    Normal, Italic, Monospace, Strong
}

enum Color {
    Primary, Secondary, Warning, Error, Success
}
