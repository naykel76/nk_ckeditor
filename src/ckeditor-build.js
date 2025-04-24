import { BalloonEditor, ClassicEditor, InlineEditor } from 'ckeditor5';

import { basicEditorConfig, basicEditorConfigExt, standardEditorConfig } from './editors';

import { createBalloonEditor, createClassicEditor, createInlineEditor } from './common';

window.CKE = {
    BalloonEditor, ClassicEditor, InlineEditor,
    basicEditorConfig, basicEditorConfigExt, standardEditorConfig,
    createBalloonEditor, createClassicEditor, createInlineEditor
};