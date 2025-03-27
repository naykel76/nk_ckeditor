<p align="center"><a href="https://naykel.com.au" target="_blank"><img src="https://avatars0.githubusercontent.com/u/32632005?s=460&u=d1df6f6e0bf29668f8a4845271e9be8c9b96ed83&v=4" width="120"></a></p>

# NAYKEL CKEditor 5

Inspect the `vite.config.js` file for more information on the build configuration.

```bash
npx vite build --debug
```

<div style="color: red; font-size: 2.5rem; font-weight: bold;">WARNING</div>  

This project uses JTB, which relies on deprecated Sass features, including:  

- **Legacy JS API** – Scheduled for removal in Dart Sass 2.0.0.  
- **Global built-in functions** – Scheduled for removal in Dart Sass 3.0.0.  
- **Color functions** – Functions like `darken()` and `lighten()` are deprecated.  

To prevent excessive warnings in the console, these deprecation warnings have been
suppressed in `vite.config.js`.  