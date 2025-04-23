import { BalloonEditor, ClassicEditor, InlineEditor } from 'ckeditor5';
import 'ckeditor5/ckeditor5.css';
import './scss/ckeditor.scss';

const LICENSE_KEY = 'GPL';

/**
 * Common configuration for all CKEditor components.
 * 
 * This configuration contains shared settings that can be reused across
 * different editor builds. While some options may not be required in all
 * configurations, keeping them centralised makes it easier to manage and
 * customise. If specific configurations need to override or exclude certain
 * settings, consider creating more targeted configurations instead.
 */
export const commonConfig = {
    licenseKey: LICENSE_KEY,
    link: {
        addTargetToExternalLinks: true,
        defaultProtocol: 'https://',
    },
};

/**
 * Creates a CKEditor instance for a specific editor class.
 * 
 * This function initialises the provided editor class (e.g., ClassicEditor, InlineEditor, etc.)
 * on the specified DOM element and applies the given configuration.
 * It also ensures that the provided callback is executed after the editor is initialised.
 *
 * @param {Function} EditorClass - The CKEditor class to initialise (e.g., ClassicEditor, InlineEditor).
 * @param {string} elementSelector - The ID of the HTML element to initialise the editor on.
 * @param {Object} config - The configuration object for the editor.
 * @param {Function} implementationCallback - The callback to execute after the editor is created. 
 *                                          This receives the editor instance as an argument.
 * @throws {Error} If the implementationCallback is not provided or is not a function.
 * @returns {Promise} Returns a promise that resolves with the editor instance.
 */
const createEditor = async (EditorClass, elementSelector, config, implementationCallback) => {
    // Ensure a valid callback is provided
    if (typeof implementationCallback !== 'function') {
        throw new Error(`A valid implementation callback function must be provided for ${elementSelector}`);
    }

    // Initialise the editor and execute the callback once it's ready
    return EditorClass
        .create(document.getElementById(elementSelector), config)
        .then(editor => {
            // Execute the callback with the editor instance
            implementationCallback(editor);
            return editor;
        })
        .catch(error => {
            console.error(error);
        });
};

// Editor wrapper functions
export const createBalloonEditor = (el, cfg, cb) => createEditor(BalloonEditor, el, cfg, cb);
export const createClassicEditor = (el, cfg, cb) => createEditor(ClassicEditor, el, cfg, cb);
export const createInlineEditor = (el, cfg, cb) => createEditor(InlineEditor, el, cfg, cb);