# Tuulkit

> A ground-up workflow for Front-End development ![MIT](https://img.shields.io/packagist/l/doctrine/orm.svg)

Tuulkit is a [SASS](http://sass-lang.com/) toolkit for ground-up development. It is curated and maintained by [Matt Litherland](http://twitter.com/mattsince87) and a product of [SINCE87](http://mattsince87.com). We welcome any collaborators to create their own forks and raise issues.

* [View Website](http://tuulkit.io)

## Status



## Getting Started

Tuulkit can be installed using the **git clone** method or by using **bower**.

```shell
  bower install tuulkit
```
```shell
  git clone git@github.com:gmrgo/tuulkit.git
```

## Customising Tuulkit

We recommend modifying variables such as those contained in `_config.scss` and then overiding default components on a project by project basis.

## Normalize.css

[Normalize.css](http://necolas.github.io/normalize.css/) helps make browsers render all elements more consistently and in line with modern standards. it precisely targets only the styles that need normalizing.

## Susy

[Susy](http://susy.oddbird.net/) is our grid framework of choice. If you do not wish to use this, imply remove `@import 'susy';` from the `_theme.scss` file.

## Grunt

Our build process or development workflow includes the JavaScript Task Runner [Grunt](https://gruntjs.com/) enabling us to automate repetitive tasks such as compiling Sass and applying vender prefixes to our CSS. You can learn more about Grunt in [this useful blog post](http://blog.teamtreehouse.com/getting-started-with-grunt) by Team Treehouse.

#### Grunt Setup

Our out-the-box Grunt packages and automation process include Sass, Autoprefixer, Connect (Local Server) and Live Reload. You may use this is your default environment, install by using this command:

```
  npm install
```

Once the plugins have been installed, you will need to enable live reload on your page, add a script tag before your closing `</body>` tag pointing to the livereload.js script:

```html
  <script src="//localhost:35729/livereload.js"></script>
```

It is important to note that this file is injected into the dom by the grunt-contrib-watch plugin. For more information, see [enabling live reload in your HTML](https://github.com/gruntjs/grunt-contrib-watch#user-content-enabling-live-reload-in-your-html). 

## Autoprefixer

We use [Autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) to deal with CSS vendor prefixes. If you're compiling Tuulkit from its Sass source you'll need to integrate Autoprefixer into your build process, typically using Grunt.


## Curators

* [mattsince87](https://github.com/mattsince87)