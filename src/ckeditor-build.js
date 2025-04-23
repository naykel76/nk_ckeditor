import { BalloonEditor, ClassicEditor, InlineEditor } from 'ckeditor5';

import { basicEditorConfig, standardEditorConfig } from './editors';

import { createBalloonEditor, createClassicEditor, createInlineEditor } from './common';

window.CKE = {
    BalloonEditor, ClassicEditor, InlineEditor,
    basicEditorConfig, standardEditorConfig,
    createBalloonEditor, createClassicEditor, createInlineEditor
};