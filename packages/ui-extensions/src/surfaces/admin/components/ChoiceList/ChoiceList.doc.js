"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const data = {
    name: 'ChoiceList',
    description: 'Use this component if you need to group together a related list of interactive choices as radio buttons or checkboxes.',
    requires: '',
    thumbnail: 'choicelist-thumbnail.png',
    isVisualComponent: true,
    type: '',
    definitions: [
        {
            title: 'ChoiceListProps',
            description: '',
            type: 'ChoiceListProps',
        },
    ],
    category: 'UI components',
    subCategory: 'Forms',
    defaultExample: {
        image: 'choicelist-default.png',
        codeblock: {
            title: 'Simple ChoiceList example',
            tabs: [
                {
                    title: 'React',
                    code: '../../../../../../ui-extensions-react/src/surfaces/admin/components/ChoiceList/examples/basic-choicelist.example.tsx',
                    language: 'tsx',
                },
                {
                    title: 'JS',
                    code: './examples/basic-choicelist.example.ts',
                    language: 'js',
                },
            ],
        },
    },
    related: [
        {
            type: 'component',
            name: 'Select',
            url: '/docs/api/admin-extensions/components/forms/select',
        },
    ],
};
exports.default = data;
