# `reactivemaps-starter-app`

The reactivemaps starter app is a simple getting started boilerplate app for the [reactivemaps](https://github.com/appbaseio/reactivemaps) library. To use this, first clone the repository.

`git clone https://github.com/appbaseio-apps/reactivemaps-starter-app.git`.

## Installation

- `npm install`
- `npm start` for development server at port 8000
- `npm run build` for production

### Try with bootstrap CSS instead of materialize

The `master` branch uses materialize as the CSS styling framework. `reactivemaps` also comes with support for bootstrap in the form a [bootstrap polyfill css file](https://github.com/appbaseio/reactivemaps/blob/dev/dist/css/bootstrap.polyfill.min.css) that can be included to render the components with bootstrap. You can try the `withbootstrap` branch to see this in action.

```sh
git checkout withbootstrap
npm install
npm start  (open localhost:8080)
```

## Try in browser (without NPM)

If you are new to React and don't want to dig into the NPM based bundling (webpack, browserify, gulp), try the `umd` branch.

```sh
git checkout umd
http-server  (open localhost:8080)
```
