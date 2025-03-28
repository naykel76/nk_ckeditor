<p align="center"><a href="https://naykel.com.au" target="_blank"><img src="https://avatars0.githubusercontent.com/u/32632005?s=460&u=d1df6f6e0bf29668f8a4845271e9be8c9b96ed83&v=4" width="120"></a></p>

# NAYKEL CKEditor 5

- [Compilation](#compilation)
    - [Custom CKEditor 5 Build](#custom-ckeditor-5-build)
    - [Vite Project Build](#vite-project-build)
- [Debugging](#debugging)
- [Documentation](#documentation)
    - [Toolbars](#toolbars)
        - [Configuration](#configuration)
        - [Multiline Toolbar](#multiline-toolbar)
- [Usage (WIP)](#usage-wip)
- [Editor Builds](#editor-builds)
    - [1. **Basic Editor**](#1-basic-editor)
- [Deprecation Warnings in JTB](#deprecation-warnings-in-jtb)
- [CKEditor 5 Builds](#ckeditor-5-builds)
- [To Do](#to-do)

## Compilation

### Custom CKEditor 5 Build

To bundle the project with the custom build of CKEditor 5 and output the files to the
`dist` directory, use the following command:

```bash
npx vite build --mode=bundle
# or
npm run bundle
```

This will compile the custom CKEditor 5 build and place the output in the dist directory.

### Vite Project Build

To compile the entire Vite project for production, run the following command:

```bash
npm run build
```

## Debugging

Inspect the `vite.config.js` file for more information on the build configuration.

```bash
npx vite build --debug
```


## Documentation

### Toolbars

#### Configuration

Toolbars can be defined in two ways: 

1. **As an Array of Strings**: This is the simplest format, where each string represents a
   toolbar item.

```js
    toolbar: ['bold', 'italic', 'underline', '|', 'link', 'bulletedList']
```

2. **As an Object with Additional Properties**: This format allows you to specify
   additional options, such as preventing grouping when the toolbar overflows.

```js
    toolbar: {
        items: ['bold', 'italic', 'underline', '|', 'link', 'bulletedList'],
        shouldNotGroupWhenFull: true,
    }
```

#### Multiline Toolbar

To arrange toolbar items into multiple lines, set the `shouldNotGroupWhenFull` option to
`true`. Use the `'-'` separator to define breaking points. For example:

```js
toolbar: {
    items: ['bold', 'italic', '-', 'bulletedList', 'numberedList'],
    shouldNotGroupWhenFull: true,
},
```


## Usage (WIP)

Invoking the `setupEditor` function will create a new instance of the CKEditor 5 editor.
The method accepts three arguments:

1. The ID of the element to attach the editor to.
2. The configuration object for the editor.
3. A callback function with the implementation logic to execute after the editor has been
   created.

```javascript
const cb1 = () => console.log('Basic editor is ready.');
setupEditor('fullEditor', fullEditorConfig, cb1);
```

To pass parameters to the callback function, wrap the function in an anonymous function.

```javascript
const cb2 = (type) => console.log(`Basic ${type} is ready.`);
setupEditor('fullEditor', fullEditorConfig, () => cb2('fullEditor'));
```

**Note**: Wrapping the callback in an anonymous function ensures it is executed only after
the editor is created. Without this, the callback would execute immediately, and its
return value would be passed to `setupEditor`, causing errors.

## Editor Builds

When compiled, the project generates several different editor configurations, each
tailored to different use cases. Below are the details of each build:

### 1. **Basic Editor**
   - **Description**: 
     - A minimal editor designed for simple text formatting tasks.
     - Includes only the most essential features, such as bold, italic, lists and links.
     - Does not support advanced features like tables or links.
   - **Config**: `basicEditorConfig`
   - **Use Case**: Ideal for lightweight applications where simplicity is key.
<!-- 
### 2. **Default Editor**
   - **Description**: 
     - A balanced editor with a typical toolbar offering common features.
     - Includes basic text styling (bold, italic, underline), links, images, lists, and tables.
     - Suitable for most general-purpose editing needs.
   - **Config**: `defaultEditorConfig`
   - **Use Case**: Perfect for general use cases requiring a mix of basic and intermediate features.

### 3. **Full Editor**
   - **Description**: 
     - The most feature-rich configuration with all available tools.
     - Includes advanced features such as media embedding, extended text formatting, full table support, and more.
   - **Config**: `fullEditorConfig`
   - **Use Case**: Best for advanced applications requiring comprehensive editing capabilities. -->

## Deprecation Warnings in JTB

This project uses JTB, which relies on deprecated Sass features, including:  

- **Legacy JS API** – Scheduled for removal in Dart Sass 2.0.0.  
- **Global built-in functions** – Scheduled for removal in Dart Sass 3.0.0.  
- **Color functions** – Functions like `darken()` and `lighten()` are deprecated.  

To prevent excessive warnings in the console, these deprecation warnings have been
suppressed in `vite.config.js`.  

## CKEditor 5 Builds

- [Basic Build](https://ckeditor.com/ckeditor-5/builder/#installation/NoNgNARATAdAzPCkQgCwgIxwJzYOwAc2Uq2ArHiFAAx57UF6onlTbOGpIQCmAdkmphgGMEKGiJAXUjYAJiR48AZhClA=)

<!-- review these -->

- [Starter
  Build](https://ckeditor.com/ckeditor-5/builder/#installation/NodgNARATAdAzPCk4gBxQKwDZMEZVyoCcALKrlCCAAwlFZIQCmAdktWMLmB7z2LgC6kDBlQAzAMa4GgoA===)
- [Starter
  Build](https://ckeditor.com/ckeditor-5/builder/#installation/NodgNARATAdAzPCk4gBxQKwDZMEZVyoCcALKrlCCAAwlFZIQCmAdktWMLmB7z2LgC6kDBlQAzAMa4GgoA===)
- [Developer Src
  Build](https://ckeditor.com/ckeditor-5/builder/#installation/NoFgNARATAdAzPCkCsyDsAGNA2NBOVNARmwzygA4Ls8K441MoQkIBTAOyQzGCLB49+QgLqQAZuUoAjOBBFA=)


## To Do

- Add table support
- Upload files