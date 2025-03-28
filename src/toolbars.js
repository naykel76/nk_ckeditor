/**
 * ============================================================================
 * Predefined Toolbars
 * ============================================================================
 * These are predefined toolbars for specific tasks like formatting, file
 * handling, and source editing. Ensure that the required plugins are included
 * in the build; otherwise, missing plugins will prevent toolbar items from
 * appearing.
 */
export const formattingToolbar = ['bold', 'italic', 'underline', '|'];
export const linkToolbar = ['link', '|'];
export const listToolbar = ['bulletedList', 'numberedList', '|'];

/**
 * ============================================================================
 * Toolbar Builds
 * ============================================================================
 * Predefined toolbars providing a set of tools for specific editor builds. Each
 * serves as a standalone configuration for general use.
 */
export const basicEditorToolbar = [...formattingToolbar, ...linkToolbar, ...listToolbar,];
