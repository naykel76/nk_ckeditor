import { AutoLink, Autosave, Bold, Essentials, Italic, Link, List, Paragraph, Underline } from 'ckeditor5';
import { commonConfig } from './common.js';
import { basicEditorToolbar } from './toolbars.js';

const basicEditorPlugins = [AutoLink, Autosave, Bold, Essentials, Italic, Link, List, Paragraph, Underline];

export const basicEditorConfig = {
    ...commonConfig,
    plugins: basicEditorPlugins,
    toolbar: basicEditorToolbar,
    link: {
        addTargetToExternalLinks: true,
        defaultProtocol: 'https://',
    },
};