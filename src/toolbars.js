/**
 * ============================================================================
 * Predefined Toolbars
 * ============================================================================
 * These are predefined toolbars for specific tasks like formatting, file
 * handling, and source editing. Ensure that the required plugins are included
 * in the build; otherwise, missing plugins will prevent toolbar items from
 * appearing.
 */

export const toolbarTextStylesBasic = ['bold', 'italic', 'underline', '|'];
export const toolbarTextStylesExt = ['heading', '|', 'bold', 'italic', 'underline', 'removeFormat', '|', 'horizontalLine', '|'];
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
export const basicToolbar = [...toolbarTextStylesBasic];
export const basicToolbarExt = [...toolbarTextStylesBasic, ...toolbarLists, ...toolbarLinks];
export const standardToolbar = [...toolbarTextStylesExt, ...toolbarLinks, ...toolbarListsExt];
