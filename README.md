# GMRUI 

The GMRUI (or GamerGo UI) is a Responsive Front-End Framework built with [SASS](http://sass-lang.com/). It is curated by [Matt Litherland](http://twitter.com/mattsince87) and maintained by the GMRGO Development Team. We welcome any collaborators to create their own forks and raise issues.

* [Documentation](http://gmrgo.github.io/gmrui/) hosted with [GitHub Pages](http://pages.github.com)

## Documentation & Repository

Find the main repository files on the [gh-pages](https://github.com/gmrgo/gmrui/tree/gh-pages) branch of this project. View the [documentation](http://gmrgo.github.io/gmrui/).

## Getting Started

GMRUI can be installed using the **git clone** method or by using **bower**.

* `bower install gmrui`
* `git clone git@github.com:gmrgo/gmrui.git`

### Customising GMRUI

We recommend modifying variables such as the colors contained in `_colors.scss` and then styling overrides in an additional stylesheet such as `_theme.scss`.

### Autoprefixer for SASS

GMRUI uses [Autoprefixer](https://github.com/postcss/autoprefixer) to deal with CSS vendor prefixes. If you're compiling GMRUI from its Sass source and not using our full release, you'll need to integrate Autoprefixer into your build process yourself. We use [CodeKit](https://incident57.com/codekit/) by [bdkjones](http://twitter.com/bdkjones).

### Normalize.css

GMRUI uses [normalize.css](http://necolas.github.io/normalize.css/) to help make browsers render all elements more consistently and in line with modern standards. it precisely targets only the styles that need normalizing.

## Curators

* [mattsince87](https://github.com/mattsince87)
* [GamerGo](https://github.com/gmrgo)