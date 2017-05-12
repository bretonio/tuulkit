# Tuulkit

Tuulkit is a [SASS](http://sass-lang.com/) toolkit for ground-up development. It is curated and maintained by [Matt Litherland](http://twitter.com/mattsince87) and a product of [SINCE87](http://mattsince87.com). We welcome any collaborators to create their own forks and raise issues.

* [View Website](http://tuulkit.io)

## Getting Started

Tuulkit can be installed using the **git clone** method or by using **bower**.

* `bower install gmrui`
* `git clone git@github.com:gmrgo/gmrui.git`

### Customising Tuulkit

We recommend modifying variables such as those contained in `_config.scss` and then overiding default components on a project by project basis.

### Normalize.css

[Normalize.css](http://necolas.github.io/normalize.css/) helps make browsers render all elements more consistently and in line with modern standards. it precisely targets only the styles that need normalizing.

### Susy

[Susy](http://susy.oddbird.net/) is our grid framework of choice. If you do not wish to use this, imply remove `@import 'susy';` from the `_theme.scss` file.

### Grunt

Our build process or development workflow includes the JavaScript Task Runner [Grunt](https://gruntjs.com/) enabling us to automate repetitive tasks such as compiling Sass and applying vender prefixes to our CSS. You can learn more about Grunt in [this useful blog post](http://blog.teamtreehouse.com/getting-started-with-grunt) by Team Treehouse.

### Autoprefixer

We use [Autoprefixer](https://github.com/nDmitry/grunt-autoprefixer) to deal with CSS vendor prefixes. If you're compiling Tuulkit from its Sass source you'll need to integrate Autoprefixer into your build process, typically using Grunt.


## Curators

* [mattsince87](https://github.com/mattsince87)