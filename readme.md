# Single page web app example

## Overview
Yeoman generated webapp with:

* Jquery
* Underscore
* Backbone
* Backbone.Marionette
* Handlebars
* RequireJS
* i18n
* Mocha
* Chai
* SASS

## Installation

* [Install yo, bower, grunt.](http://yeoman.io/gettingstarted.html)

* Clone the repo and run

    ```shell
    npm install && bower install
    ```

## Build

### Preview local

```shell
grunt server
```

### Preview distribution

```shell
grunt server:dist
```

### Build distribution, w/o tests

```shell
grunt build
```

### Build distribution, with tests

```shell
grunt
```

## Test

```shell
grunt test
```