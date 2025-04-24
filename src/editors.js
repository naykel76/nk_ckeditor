// core editing
import { AutoLink, Autosave, Bold, Essentials, Italic, Link, List, Paragraph, Underline, TodoList } from 'ckeditor5';
// basic formatting plugins
import { Alignment, BlockQuote, Heading, Highlight, HorizontalLine, Indent, IndentBlock, Markdown, PasteFromMarkdownExperimental, PasteFromOffice, RemoveFormat } from 'ckeditor5';
// table editing
import { Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar } from 'ckeditor5';
// source editing
import { CodeBlock, GeneralHtmlSupport, HtmlComment, ShowBlocks, SourceEditing } from 'ckeditor5';
// toolbars
import { basicToolbar, basicToolbarExt, standardToolbar, toolbarSource } from './toolbars.js';

import { commonConfig } from './common.js';


/**
 * ============================================================================
 * Plugin Groups
 * ============================================================================
 * These groupings organize plugins by category for easier configuration
 * management. All plugins listed here are statically imported above and
 * included in the final bundle, so these groupings do not affect bundle size
 * or performance.
 */
const corePlugins = [AutoLink, Autosave, Bold, Essentials, Italic, Link, List, Paragraph, Underline, TodoList];
const formattingPlugins = [Alignment, BlockQuote, Heading, Highlight, HorizontalLine, Indent, IndentBlock, PasteFromOffice, RemoveFormat];
const developerPlugins = [CodeBlock, GeneralHtmlSupport, HtmlComment, ShowBlocks, SourceEditing];
const tablePlugins = [Table, TableCaption, TableCellProperties, TableColumnResize, TableProperties, TableToolbar];

// to include markdown support add - Markdown, PasteFromMarkdownExperimental,


/**
 * ============================================================================
 * Plugin Builds
 * ============================================================================
 * These are predefined plugin sets used in editor configurations. Each set
 * represents a typical usage scenario. All referenced plugins must be included
 * in the build (which they are, via static imports above).
 *
 * NOTE: Since all plugins are already bundled, you can include them ALL in any
 * config to simplify toolbar setup and avoid missing dependencies. This does
 * not affect performance or bundle size, as all plugins are statically imported
 * above.
 */
const basicEditorPlugins = corePlugins;
const standardEditorPlugins = [...corePlugins, ...formattingPlugins, ...tablePlugins];
const allPlugins = [...corePlugins, ...formattingPlugins, ...tablePlugins, ...developerPlugins];

export const basicEditorConfig = {
    ...commonConfig,
    plugins: basicEditorPlugins,
    toolbar: basicToolbar
};

export const basicEditorConfigExt = {
    ...commonConfig,
    plugins: basicEditorPlugins,
    toolbar: basicToolbarExt
};

export const standardEditorConfig = {
    ...commonConfig,
    toolbar: [...standardToolbar, ...toolbarSource],
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
    }
};

