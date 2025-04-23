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
export const toolbarTextStylesBasic = ['bold', 'italic', 'underline', '|'];
export const toolbarTextStylesExt = ['heading', '|','bold', 'italic', 'underline', 'removeFormat', '|'];
export const toolbarLinks = ['link', '|'];
export const toolbarLists = ['bulletedList', 'numberedList', '|'];
export const toolbarListsExt = ['bulletedList', 'numberedList', 'todoList', '|'];
export const toolbarSource = ['sourceEditing', '|'];
// export const devToolbarExt = ['sourceEditing', 'showBlocks', '|', 'codeBlock'];

/**
 * ============================================================================
 * Toolbar Builds
 * ============================================================================
 * Predefined toolbars providing a set of tools for specific editor builds. Each
 * serves as a standalone configuration for general use.
 */
export const basicEditorToolbar = [...toolbarTextStylesBasic];
export const standardEditorToolbar = [...toolbarTextStylesExt, ...toolbarLinks, ...toolbarListsExt];
