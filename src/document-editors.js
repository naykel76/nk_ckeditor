import { AutoLink, Autosave, Bold, Essentials, Italic, Link, List, Paragraph, Underline, TodoList } from 'ckeditor5';
import { Alignment, BlockQuote, Heading, Highlight, HorizontalLine, Indent, IndentBlock, Markdown, PasteFromMarkdownExperimental, PasteFromOffice, RemoveFormat } from 'ckeditor5';

import { commonConfig } from './common.js';
import { basicEditorToolbar, standardEditorToolbar } from './toolbars.js';

/**
 * ============================================================================
 * Predefined Plugins
 * ============================================================================
 * These are predefined plugins for specific editor builds. Ensure that the
 * required plugins are included in the build; otherwise, missing plugins will
 * prevent certain features from working.
 */

const corePlugins = [AutoLink, Autosave, Bold, Essentials, Italic, Link, List, Paragraph, Underline, TodoList];
const formattingPlugins = [Alignment, BlockQuote, Heading, Highlight, HorizontalLine, Indent, IndentBlock, Markdown, PasteFromMarkdownExperimental, PasteFromOffice, RemoveFormat];

/**
 * ============================================================================
 * Plugin Builds
 * ============================================================================
 * Predefined toolbars providing a set of tools for specific editor builds. Each
 * serves as a standalone configuration for general use.
 */

const basicEditorPlugins = corePlugins;
const standardEditorPlugins = [...corePlugins, ...formattingPlugins];

export const basicEditorConfig = {
    ...commonConfig,
    plugins: basicEditorPlugins,
    toolbar: basicEditorToolbar,
};

export const standardEditorConfig = {
    ...commonConfig,
    plugins: standardEditorPlugins,
    toolbar: standardEditorToolbar,
};