/**
 * These are the preset builds from CKEditor 5 for the ClassicEditor and
 * BalloonEditor. They are not used in the NayKel CKEditor build, but are
 * included here for reference and to demonstrate how to use them.
 */

import { ClassicEditor, editorConfig as classicEditorConfig } from './classic-editor-complete';
import { BalloonEditor, editorConfig as balloonEditorConfig } from './balloon-editor-complete';

ClassicEditor.create(document.getElementById('classicEditor'), classicEditorConfig)
    .then(editor => { console.log('ClassicEditor initialized'); })
    .catch(error => { console.error('Error initializing ClassicEditor:', error); });

BalloonEditor.create(document.getElementById('balloonEditor'), balloonEditorConfig)
    .then(editor => { console.log('BalloonEditor initialized'); })
    .catch(error => { console.error('Error initializing BalloonEditor:', error); });