import './src/scss/app.scss';

import './src/ckeditor-build';

import { setupClassicEditor } from './src/common';
import { basicEditorConfig, standardEditorConfig } from './src/document-editors';

// Callback function for testing.
const cb = (type) => console.log(`Basic ${type} is ready.`);

document.addEventListener("DOMContentLoaded", function () {
    setupClassicEditor('basicEditor', basicEditorConfig, () => cb('basicEditor'));
    setupClassicEditor('standardEditor', standardEditorConfig, () => cb('standardEditor'));
});


