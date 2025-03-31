/**
 * ============================================================================
 * Predefined Toolbars
 * ============================================================================
 * These are predefined toolbars for specific tasks like formatting, file
 * handling, and source editing. Ensure that the required plugins are included
 * in the build; otherwise, missing plugins will prevent toolbar items from
 * appearing.
 */

// Why don't i use spread operator for the toolbar items? At this stage I can
// not guaranteed the order of the items in the toolbar array so it is best to
// define them explicitly for now.
export const fontFormattingToolbar = ['bold', 'italic', 'underline', '|'];
export const fontFormattingToolbarExt = ['heading', '|','bold', 'italic', 'underline', 'removeFormat', '|'];
export const linkToolbar = ['link', '|'];
export const listToolbar = ['bulletedList', 'numberedList', '|'];
export const listToolbarExt = ['bulletedList', 'numberedList', 'todoList', '|'];
export const sourceToolbar = ['sourceEditing', '|'];
// export const devToolbarExt = ['sourceEditing', 'showBlocks', '|', 'codeBlock'];

/**
 * ============================================================================
 * Toolbar Builds
 * ============================================================================
 * Predefined toolbars providing a set of tools for specific editor builds. Each
 * serves as a standalone configuration for general use.
 */
export const basicEditorToolbar = [...fontFormattingToolbar, ...linkToolbar, ...listToolbar,];
export const standardEditorToolbar = [...fontFormattingToolbarExt, ...linkToolbar, ...listToolbarExt];
