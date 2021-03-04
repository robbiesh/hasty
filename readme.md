# Hasty

Hasty is a low-JS, easily transferable Shopify store starter.

Why use Hasty?

1. Scores 100 on Google Pagespeed Insights.
2. Contains all its build files within Shopify's assets folder – so when a new developer picks up a Hasty-built project, they can download the theme directly from the store, run the below commands to compile the JS and CSS, and make changes to the site. No need to transfer repos.
3. Uses TailwindCSS (:raised_hands:), and has responsive skeletons built for most of Shopify's templates.

This is very much a work in progress. Here are a few things on my to-do list:

- [x] Custom note option on product
- [x] Custom note option on cart
- [ ] Contact form
- [ ] Gift card
- [x] Modal
- [ ] Quickview
- [x] AJAX cart
- [ ] ADA compliance
- [ ] Quantity selector
- [ ] PDP slider
- [ ] Cart styling

I'm still on the fence about the JS setup, so that may change slightly.

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
