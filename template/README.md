# <%= name %>

[![Build Status][travis-img]][travis-url]
[![Package Version][version-img]][version-url]
[![License][license-img]][license-url]
[![Dependency Status][dependency-img]][dependency-url]
[![Code Style][style-img]][style-url]

> <%= description %>

## Usage

```shell
$ npm run <task> [options]
```

### e.g.

```shell
# Runs the app in development mode
$ npm run serve --port 5210 --open
# Builds the app for production to the `dist` folder
$ npm run build --production
```

### Available Scripts

#### `npm run lint` or `npm run lint`

Lint the styles & scripts files.

#### `npm run compile` or `npm run compile`

Compile the styles & scripts & pages file.

#### `npm run serve` or `npm run serve`

Runs the app in development mode with a automated server.

##### options

- `open`: Open browser on start, Default: `false`
- `port`: Specify server port, Default: `2080`

#### `npm run build` or `npm run build`

Builds the app for production to the `dist` folder. It minify source in production mode for the best performance.

##### options

- `production`: Production mode flag, Default: `false`
- `prod`: Alias to `production`

#### `npm run start` or `npm run start`

Running projects in production mode.

##### options

- `open`: Open browser on start, Default: `false`
- `port`: Specify server port, Default: `2080`

#### `npm run deploy` or `npm run deploy`

Deploy the `dist` folder to [GitHub Pages](https://pages.github.com).

##### options

- `branch`: The name of the branch you'll be pushing to, Default: `'gh-pages'`

#### `npm run clean` or `npm run clean`

Clean the `dist` & `temp` files.

## Folder Structure

```
└── my-awesome-pages ································· project root
   ├─ public ········································· static folder
   │  └─ favicon.ico ································· static file (unprocessed)
   ├─ src ············································ source folder
   │  ├─ assets ······································ assets folder
   │  │  ├─ fonts ···································· fonts folder
   │  │  │  └─ pages.ttf ····························· font file (imagemin)
   │  │  ├─ images ··································· images folder
   │  │  │  └─ logo.png ······························ image file (imagemin)
   │  │  ├─ scripts ·································· scripts folder
   │  │  │  └─ main.js ······························· script file (babel / uglify)
   │  │  └─ styles ··································· styles folder
   │  │     ├─ _variables.scss ······················· partial sass file (dont output)
   │  │     └─ main.scss ····························· entry scss file (scss / postcss)
   │  ├─ layouts ····································· layouts folder
   │  │  └─ basic.html ······························· layout file (dont output)
   │  ├─ partials ···································· partials folder
   │  │  └─ header.html ······························ partial file (dont output)
   │  ├─ about.html ·································· page file (use layout & partials)
   │  └─ index.html ·································· page file (use layout & partials)
   ├─ .csscomb.json ·································· csscomb config file
   ├─ .editorconfig ·································· editor config file
   ├─ .gitignore ····································· git ignore file
   ├─ .travis.yml ···································· travis ci config file
   ├─ CHANGELOG.md ··································· repo changelog
   ├─ LICENSE ········································ repo license
   ├─ README.md ······································ repo readme
   ├─ gulpfile.js ···································· gulp tasks file
   ├─ package.json ··································· package file
   └─ npm run.lock ······································ npm run lock file
```

## Related

- [zce/x-pages](https://github.com/zce/x-pages) - A fully managed gulp workflow for static page sites.

## Related

- [zce/caz](https://github.com/zce/caz) - A simple yet powerful template-based Scaffolding tools.

## Contributing

1. **Fork** it on GitHub!
2. **Clone** the fork to your own machine.
3. **Checkout** your feature branch: `git checkout -b my-awesome-feature`
4. **Commit** your changes to your own branch: `git commit -am 'Add some feature'`
5. **Push** your work back up to your fork: `git push -u origin my-awesome-feature`
6. Submit a **Pull Request** so that we can review your changes.

> **NOTE**: Be sure to merge the latest from "upstream" before making a pull request!

## License

[MIT](LICENSE) &copy; [<%= author %>](<%= url %>)



[travis-img]: https://img.shields.io/travis/<%= github %>/<%= name %>
[travis-url]: https://travis-ci.org/<%= github %>/<%= name %>
[version-img]: https://img.shields.io/github/package-json/v/<%= github %>/<%= name %>
[version-url]: https://github.com/<%= github %>/<%= name %>
[license-img]: https://img.shields.io/github/license/<%= github %>/<%= name %>
[license-url]: https://github.com/<%= github %>/<%= name %>/blob/master/LICENSE
[dependency-img]: https://img.shields.io/librariesio/github/<%= github %>/<%= name %>
[dependency-url]: https://github.com/<%= github %>/<%= name %>
[style-img]: https://img.shields.io/badge/code_style-standard-brightgreen
[style-url]: http://standardjs.com
