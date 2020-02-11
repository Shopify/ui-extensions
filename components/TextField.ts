interface TextField {
    value: string;
    placeHolder?: string;
    helpText?: string;
    multiline: (boolean | number);

    onBlur: () => void;
    onFocus: () => void;
    onChange: (value: string) => void;
}