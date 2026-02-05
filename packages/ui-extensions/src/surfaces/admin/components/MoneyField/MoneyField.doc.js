"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = {
    name: 'MoneyField',
    description: 'This is the right component for letting users enter Money digits.',
    requires: '',
    thumbnail: 'moneyfield-thumbnail.png',
    isVisualComponent: true,
    type: '',
    definitions: [
        {
            title: 'MoneyFieldProps',
            description: '',
            type: 'MoneyFieldProps',
        },
    ],
    category: 'UI components',
    subCategory: 'Forms',
    defaultExample: {
        image: 'moneyfield-default.png',
        codeblock: {
            title: 'Simple MoneyField example',
            tabs: [
                {
                    title: 'React',
                    code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/MoneyField/examples/basic-moneyfield.example.tsx',
                    language: 'tsx',
                },
                {
                    title: 'JS',
                    code: './examples/basic-moneyfield.example.ts',
                    language: 'js',
                },
            ],
        },
    },
    related: [
        {
            type: 'component',
            name: 'NumberField',
            url: '/docs/api/admin-extensions/components/forms/numberfield',
        },
    ],
};
exports.default = data;
