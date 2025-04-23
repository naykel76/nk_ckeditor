import './src/scss/app.scss';

import './src/ckeditor-build';

import { createClassicEditor, createBalloonEditor, createInlineEditor } from './src/common';
import { basicEditorConfig, standardEditorConfig } from './src/editors';

// The editor returns a promise, this callback is included for testing purposes.
const cb = (type) => console.log(`Basic ${type} is ready.`);

document.addEventListener("DOMContentLoaded", function () {
    createBalloonEditor('balloonEditorBasicElement', basicEditorConfig, () => cb('balloonEditorBasic'));
    createBalloonEditor('balloonEditorStandardElement', standardEditorConfig, () => cb('balloonEditorStandard'));
    createClassicEditor('classicEditorBasicElement', basicEditorConfig, () => cb('classicEditorBasic'));
    createClassicEditor('classicEditorStandardElement', standardEditorConfig, () => cb('classicEditorStandard'));
    createInlineEditor('inlineEditorBasicElement', basicEditorConfig, () => cb('inlineEditorBasic'));
    createInlineEditor('inlineEditorStandardElement', standardEditorConfig, () => cb('inlineEditorStandard'));
});


