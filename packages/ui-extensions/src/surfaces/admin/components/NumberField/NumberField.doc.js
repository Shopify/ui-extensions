"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = {
    name: 'NumberField',
    description: 'This component is specifically designed for numeric data entry.',
    requires: '',
    thumbnail: 'numberfield-thumbnail.png',
    isVisualComponent: true,
    type: '',
    definitions: [
        {
            title: 'NumberFieldProps',
            description: '',
            type: 'NumberFieldProps',
        },
    ],
    category: 'UI components',
    subCategory: 'Forms',
    defaultExample: {
        image: 'numberfield-default.png',
        codeblock: {
            title: 'Simple NumberField example',
            tabs: [
                {
                    title: 'React',
                    code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/NumberField/examples/basic-numberfield.example.tsx',
                    language: 'tsx',
                },
                {
                    title: 'JS',
                    code: './examples/basic-numberfield.example.ts',
                    language: 'js',
                },
            ],
        },
    },
    related: [
        {
            type: 'component',
            name: 'TextField',
            url: '/docs/api/admin-extensions/components/forms/textfield',
        },
    ],
};
exports.default = data;
