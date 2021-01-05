# Hasty

Hasty is a fast, simple, self-contained starter for building a low-JS Shopify store.

Because Shopify stores can change hands between developers quite a bit, Hasty is built to contain all the build files within Shopify's assets folder. When a new developer picks up a Hasty-built project, they can just download the theme directly from the store, run the below commands to compile the JS and CSS, and they're off to the races.

## Commands

Navigate to the /assets folder, and do the following:

1. Install dev dependencies
```
npm install
```

2. Build the new stylesheet and Javascript
```
npm run dev
```

3. To generate minifed files for production
```
npm run build 
```

## Deploying to a store

Use [Shopify's ThemeKit.](https://shopify.github.io/themekit/)