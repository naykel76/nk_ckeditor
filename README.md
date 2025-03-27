<p align="center"><a href="https://naykel.com.au" target="_blank"><img src="https://avatars0.githubusercontent.com/u/32632005?s=460&u=d1df6f6e0bf29668f8a4845271e9be8c9b96ed83&v=4" width="120"></a></p>

# NAYKEL CKEditor 5

## Compilation

### Custom CKEditor 5 Build

To bundle the project with the custom build of CKEditor 5 and output the files to the `dist` directory, use the following command:

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

## Deprecation Warnings in JTB

This project uses JTB, which relies on deprecated Sass features, including:  

- **Legacy JS API** – Scheduled for removal in Dart Sass 2.0.0.  
- **Global built-in functions** – Scheduled for removal in Dart Sass 3.0.0.  
- **Color functions** – Functions like `darken()` and `lighten()` are deprecated.  

To prevent excessive warnings in the console, these deprecation warnings have been
suppressed in `vite.config.js`.  