import { ClassicEditor } from 'ckeditor5';
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
 * Helper function to set up a CKEditor Classic editor instance.
 * 
 * @param {string} elementSelector - The ID of the HTML element to initialize the editor on.
 * @param {Object} config - The configuration object for the editor.
 * @param {Function} [implementationCallback] - Optional callback for additional setup actions.
 * @returns {Promise<import('ckeditor5').ClassicEditor>} - A promise that resolves to the editor instance.
 */
export const setupClassicEditor = (elementSelector, config, implementationCallback) => {
    ClassicEditor
        .create(document.getElementById(elementSelector), config)
        .then(editor => {
            if (typeof implementationCallback !== 'function') {
                throw new Error(`A valid implementation callback function must be provided for the ${elementSelector} editor.`);
            }
            implementationCallback(editor);
        })
        .catch(error => { console.error(error); });
}


/**
 * Example page content for the editor.
 */
export const exampleContent = `
<p class="lead">This is a lead paragraph, which serves as an introductory text to grab attention and provide context. It is often larger and more prominent than regular text.</p>

<h2>Heading 2</h2>
<p>This is a paragraph under an H2 heading.</p>

<h3>Heading 3</h3>
<p>This is a paragraph under an H3 heading.</p>

<h4>Heading 4</h4>
<p>This is a paragraph under an H4 heading.</p>

<ul>
    <li>Item One</li>
    <li>Item Two</li>
    <li>Item Three</li>
</ul>
<ol>
    <li>First Item</li>
    <li>Second Item</li>
    <li>Third Item</li>
</ol>

<blockquote>This is a blockquote example.</blockquote>
`;