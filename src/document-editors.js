// core editing
import { AutoLink, Autosave, Bold, Essentials, Italic, Link, List, Paragraph, Underline, TodoList } from 'ckeditor5';
// basic editing
import { Alignment, BlockQuote, Heading, Highlight, HorizontalLine, Indent, IndentBlock, Markdown, PasteFromMarkdownExperimental, PasteFromOffice, RemoveFormat } from 'ckeditor5';
// table editing
import { Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar } from 'ckeditor5';
// source editing
import { CodeBlock, GeneralHtmlSupport, HtmlComment, ShowBlocks, SourceEditing } from 'ckeditor5';
// toolbars
import { basicEditorToolbar, standardEditorToolbar, sourceToolbar } from './toolbars.js';

import { commonConfig, exampleContent } from './common.js';


/**
 * ============================================================================
 * Predefined Plugins
 * ============================================================================
 * These are predefined plugins for specific editor builds. Ensure that the
 * required plugins are included in the build; otherwise, missing plugins will
 * prevent certain features from working.
 */


const corePlugins = [AutoLink, Autosave, Bold, Essentials, Italic, Link, List, Paragraph, Underline, TodoList];
const developerPlugins = [CodeBlock, GeneralHtmlSupport, HtmlComment, ShowBlocks, SourceEditing];
const formattingPlugins = [Alignment, BlockQuote, Heading, Highlight, HorizontalLine, Indent, IndentBlock, PasteFromOffice, RemoveFormat];
const tablePlugins = [Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar];

// Add these as optional
// to include markdown support add - Markdown, PasteFromMarkdownExperimental,

/**
 * ============================================================================
 * Plugin Builds
 * ============================================================================
 * Predefined toolbars providing a set of tools for specific editor builds. Each
 * serves as a standalone configuration for general use.
 */

const basicEditorPlugins = corePlugins;
const standardEditorPlugins = [...corePlugins, ...formattingPlugins, ...tablePlugins];

export const basicEditorConfig = {
    ...commonConfig,
    plugins: basicEditorPlugins,
    toolbar: basicEditorToolbar
};

export const standardEditorConfig = {
    ...commonConfig,
    toolbar: [...standardEditorToolbar, ...sourceToolbar],
    plugins: [...standardEditorPlugins, ...developerPlugins],
    // this could be moved and made to be reused in other builds but it is fine
    // for now as there are no other builds that need it.
    heading: {
        options: [
            { model: 'paragraph', title: 'Paragraph', class: 'heading_paragraph' },
            { model: 'heading1', view: 'h1', title: 'Heading 1', class: 'ck-heading_heading1' },
            { model: 'heading2', view: 'h2', title: 'Heading 2', class: 'ck-heading_heading2' },
            { model: 'heading3', view: 'h3', title: 'Heading 3', class: 'ck-heading_heading3' },
            { model: 'heading4', view: 'h4', title: 'Heading 4', class: 'ck-heading_heading4' },
        ],
    },
    // this could be moved and made to be reused in other builds but it is fine
    // for now as there are no other builds that need it.
    htmlSupport: {
        allow: [
            {
                name: /^.*$/,
                styles: true,
                attributes: true,
                classes: true
            }
        ]
    },
    initialData: exampleContent,
};

