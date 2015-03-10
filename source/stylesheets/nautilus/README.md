# Nautilus

> Nautilus is a toolkit for the modern web.  It is a collection of best-of-breed libraries, techniques, and patterns that exist to accelerate front-end web development.

### Nautilus is opinionated.

Nautilus makes the presumption that there is a "correct" structure for reusable DOM patterns.  This means that a large number of the available tools (particularly the [nt-pattern](#nt-pattern) mixin), *require* a particular HTML structure, and we are unabashed in this restriction.  In this respect, it shares many of the same idiosyncracies as [component.io](https://github.com/component/component.github.io), [Polymer](https://www.polymer-project.org/), or [Web Components](http://webcomponents.org/).  We think this is good company to be in.

### Nautilus patterns are verbose.

Nautilus patterns follow a very strict [BEM](http://bem.info/) syntax.  In fact, this dependency is so inherent that the literal HTML elements are largely immaterial.  Provided the BEM classes exist, all CSS and JS attachments should function appropriately, and that's pretty neat.

### Nautilus is components.

Nautilus is, at it's core, focused on components.  Much of the framework is built around standing up the [nt-pattern](#nt-pattern) mixin.  This allows for the rapid implementation of core front-end patterns while obviating the need for boilerplate code. #Winning.

---


## Installation

### Versioning

Nautilus utilizes [Semantic Versioning (2.0.0)](http://semver.org/) for it's versioning schema.  We will endeavour to release non-breaking changes until a major point release dictates we do so.

### Downloading

The best way to get Nautilus is from it's authoritative [Github repo](https://github.com/DigitalBungalow/nautilus).  The tip of master is always safe and current.

~~~ bash
  git clone https://github.com/kaishiro/nautilus.git nautilus
~~~

### Dependencies

We don't believe in re-inventing the wheel, therefore Nautilus does have three hard dependencies: [Sass](http://sass-lang.com), [Bourbon](http://bourbon.io), and [Neat](http://neat.bourbon.io).

Bourbon and Neat are pre-packaged in Nautilus due to the heavy use of their mixin sets to keep the Nautilus codebase lean.  We will release non-breaking minor point updates in concert with each new Bourbon and Neat release.

### Setup

Nautilus is nothing more than a toolkit.  As such, installing Nautilus requires a simple import into your primary stylesheet.

~~~ sass
  @import "nautilus/nautilus";
~~~

## Usage

### Project Organization

Nautilus presumes to live in your stylesheets directory, untouched, for all eternity.  Ideally, you'd mount Nautilus as a [git submodule](http://git-scm.com/docs/git-submodule) to easily receive any baked in goodness in future releases, but we understand that there is an unrequited disdain for submodules on occasion, so won't be pushing it as a solution (unless you want to be like the cool kids).

~~~ bash
  www
  |-- /stylesheets
      |
      |-- all.css.scss
      |
      |-- /nautilus (<-- Yay!)
~~~

The Nautilus directory itself is laid out as follows.  It should be noted that this structure is not only subject to change - it almost assuredly *will* change in future point releases.

~~~ bash
  /nautilus
  |
  |>> _nautilus.scss
  |
  |-- /dependencies
  |
  |-- /helpers
  |
  |-- /libs
  |
  |-- /reset
  |
  |-- /settings
~~~

### _nautilus.scss

The _nautilus.scss file is the primary include point for the rest of the library.  As you can see from the prepending underscore, this file will null generate upon compilation, as will every other file in Nautilus.  By default Nautilus cannot be compiled - it's just a toolkit.  It can only be accessed via a high level import.

## Dependencies

~~~ bash
  /nautilus
  |
  |-- _nautilus.scss
  |
  |>> /dependencies
  |   |
  |   |-- /bourbon
  |   |
  |   |-- /fontello
  |   |
  |   |-- /neat
  |   |
  |   |-- /rouge
  |
  |-- /helpers
  |
  |-- /libs
  |
  |-- /reset
  |
  |-- /settings
~~~

### Bourbon

[Bourbon](http://bourbon.io/) is a mixin library which many of the stock Nautilus mixins are built upon.  Since it's included in Nautilus core, all Bourbon mixins are also available for use.

### Fontello

[Fontello](http://fontello.com/) is a web glyph service. 100 commonly used Fontello glyphs come pre-rolled in Nautilus, and are being utilized in many of the default patterns implemented via the [nt-pattern](#ntpattern) mixin. 

### Neat

[Neat](http://neat.bourbon.io/) is a semantic grid system based upon Bourbon.  It is the grid system utilized by Nautilus.

### Rouge

[Rouge](https://github.com/jneen/rouge) is a syntax highlighter.  It is being used throughout this documentation, and many of the stock Pygments stylesheets are available for include.

## Helpers

~~~ bash
  /nautilus
  |
  |-- _nautilus.scss
  |
  |-- /dependencies
  |
  |>> /helpers
  |   |
  |   |-- /mixins
  |   |
  |   |-- _animations.scss
  |   |
  |   |-- _mixins.scss
  |   |
  |   |-- _resets.scss
  |
  |-- /libs
  |
  |-- /reset
  |
  |-- /settings
~~~

## Mixins

~~~ bash
  /nautilus
  |
  |-- _nautilus.scss
  |
  |-- /dependencies
  |
  |>> /helpers
  |   |
  |   |>> /mixins
  |   |   |
  |   |   |-- _background.scss 
  |   |   |
  |   |   |-- _button.scss 
  |   |   |
  |   |   |-- _clear.scss 
  |   |   |
  |   |   |-- _container.scss 
  |   |   |
  |   |   |-- _copy.scss 
  |   |   |
  |   |   |-- _font-face.scss 
  |   |   |
  |   |   |-- _font.scss 
  |   |   |
  |   |   |-- _font-weight.scss 
  |   |   |
  |   |   |-- _heading.scss 
  |   |   |
  |   |   |-- _hide-text.scss 
  |   |   |
  |   |   |-- _hr.scss 
  |   |   |
  |   |   |-- _icon.scss 
  |   |   |
  |   |   |-- _layer.scss 
  |   |   |
  |   |   |-- _max-size.scss 
  |   |   |
  |   |   |-- _pattern.scss 
  |   |   |
  |   |   |-- _rte.scss 
  |   |
  |   |-- _animations.scss
  |   |
  |   |-- _mixins.scss
  |   |
  |   |-- _resets.scss
  |
  |-- /libs
  |
  |-- /reset
  |
  |-- /settings
~~~

### nt-background

Sets a solid or semi-transparent background color.  Accepts an optional opacity (alpha) value.  Provides a solid color fallback.

~~~ scss
@mixin nt-background($color, $alpha: 1) {
  background: $color;
  background: rgba($color, $alpha);
}
~~~

### nt-button

Styles an element to a site specific button.  Accepts an argument for button variants.

~~~ scss
@mixin nt-button($variant: default) {
  display: inline-block;
  @include size(100% null);
  @include margin(1em null null null);
  @include padding(1em null 1em null);
  text-align: center;

  @include media($mq-lap) {
    @include size(auto null);
    @include padding(null 2em null 2em);
    @include transition(all, 250ms, linear);
  }
  
  @if $variant == default {

    color: map-get($button, color-text);
    border: map-get($button, border-width) solid map-get($button, color-border);
    background-color: map-get($button, color-background);

    &:hover {
      color: map-get($button, color-text-hover);
      border-color: map-get($button, color-border-hover);
      background-color: map-get($button, color-background-hover);
    }
  }

  @if $variant == alt {

    color: map-get($button-alt, color-text);
    border: map-get($button-alt, border-width) solid map-get($button-alt, color-border);
    background-color: map-get($button-alt, color-background);

    &:hover {
      color: map-get($button-alt, color-text-hover);
      border-color: map-get($button-alt, color-border-hover);
      background-color: map-get($button-alt, color-background-hover);
    }
  }
}
~~~

### nt-clear

Multi-use clear mixin for various contexts.  Accepts an optional context.  Default usage implements a Bourbon micro-clearfix.

~~~ scss
@mixin nt-clear($element: self) {

  @if $element == self {
    @include clearfix;
  }

  @if $element == header {
    @include padding($height-header-palm null null null);

    @include media($mq-lap) {
      @include padding($height-header-lap null null null);
    }

    @include media($mq-desk) {
      @include padding(0 null null null);
    }
  }
}
~~~

### nt-container

Declares a container around elements sized with Neat's span-columns mixin.  Accepts an optional argument - pseudo - for use on containers that cannot be margined (e.g. full screen video/imagery).

~~~ scss
@mixin nt-container($type: outer) {

  @if $type == outer {
    @include -clear;
    @include margin(null auto null auto);
    position: relative;
    width: $width-palm;
    max-width: $width-palm-max;
    @include media($mq-lap) {
      width: $width-lap;
      max-width: $width-lap-max;
    }
    @include media($mq-desk) {
      width: $width-desk;
      max-width: $width-desk-max;
    }
  }

  @if $type == pseudo {
    @include -clear;
    @include position(relative, null null null null);
    padding-left:2.5%;
    padding-right:2.5%;
  }

  @if $type == inner {
    @include -clear;
    @include margin(null auto null auto);
    position: relative;
    width: $width-palm;
    @include media($mq-lap) {
      width: $width-lap;
    }
    @include media($mq-desk) {
      width: $width-desk;
    }
  }
}
~~~

### nt-copy

Implements standardized site copy. Accepts arguments for variants (inversions, etc.).

~~~ scss
@mixin nt-copy($variant: default) {
  font-family: map-get($typography-p, font-family);    
  font-weight: map-get($typography-p, font-weight);    
  font-size: map-get($typography-p, font-size);    
  line-height: map-get($typography-p, line-height);    
  text-transform: map-get($typography-p, text-transform);    
  text-decoration: map-get($typography-p, text-decoration);    

  @if $variant == "inverted" {
    color: map-get($typography-p, color-inverted);    
  }
  @else {
    color: map-get($typography-p, color);    
  }
}
~~~

### nt-font-face

Implements standardized site copy. Accepts arguments for variants (inversions, etc.).

~~~ scss
@mixin nt-font-face($font-family, $file-path, $query-string, $weight: normal, $style: normal) {
  @font-face {
    font-family: $font-family;
    font-weight: $weight;
    font-style: $style;

    @if $query-string == '' {
      src: url('#{$file-path}.eot');
      src: url('#{$file-path}.eot?#iefix')               format('embedded-opentype'),
      url('#{$file-path}.woff')                     format('woff'),
      url('#{$file-path}.ttf')                      format('truetype'),
      url('#{$file-path}.svg##{$font-family}')      format('svg');
    }
    @else {
      src: url('#{$file-path}.eot?#{$query-string}');
      src: url('#{$file-path}.eot?#{$query-string}#iefix')            format('embedded-opentype'),
      url('#{$file-path}.woff?#{$query-string}')                 format('woff'),
      url('#{$file-path}.ttf?#{$query-string}')                  format('truetype'),
      url('#{$file-path}.svg?#{$query-string}##{$font-family}')  format('svg');
    }
  }
}
~~~

### nt-font

Implements a standard font set.

~~~ scss
@mixin nt-font($serif, $weight, $color: $color-text, $size: 16) {
  @if $serif == 'sans-serif' {
    font-family: $font-family-sans-serif;
  }

  @if $weight == 'bold' {
    font-weight: $font-weight-bold;
  }
  
  color: $color;
  font-size: em(strip-units($size));
}
~~~

### nt-font-weight

Implements a font weight based upon the variables present in the _typography.scss

~~~ scss
@mixin nt-font-weight($weight) {
  @if $weight == light {
    font-weight: $font-weight-light;
  }
  @if $weight == book {
    font-weight: $font-weight-book;
  }
  @if $weight == medium {
    font-weight: $font-weight-medium;
  }
  @if $weight == bold {
    font-weight: $font-weight-bold;
  }
}
~~~

### nt-heading

Implements a site standardized heading. Accepts a single argument for heading level.

~~~ scss
@mixin nt-heading($level, $invert: default) {

  @if $level == 1 {
    font-family: map-get($typography-h1, font-family);    
    font-weight: map-get($typography-h1, font-weight);    
    font-size: map-get($typography-h1, font-size-palm);    
    line-height: map-get($typography-h1, line-height);    
    text-transform: map-get($typography-h1, text-transform);    
    text-decoration: map-get($typography-h1, text-decoration);    

    @include media($mq-lap) {
      font-size: map-get($typography-h1, font-size-lap);    
    }

    @include media($mq-desk) {
      font-size: map-get($typography-h1, font-size-desk);    
    }

    @if $invert == "inverted" {
      color: map-get($typography-h1, color-inverted);    
    }
    @else {
      color: map-get($typography-h1, color);    
    }
  }

  @if $level == 2 {
    font-family: map-get($typography-h2, font-family);    
    font-weight: map-get($typography-h2, font-weight);    
    font-size: map-get($typography-h2, font-size-palm);    
    line-height: map-get($typography-h2, line-height);    
    color: map-get($typography-h2, color);    
    text-transform: map-get($typography-h2, text-transform);    
    text-decoration: map-get($typography-h2, text-decoration);    
    margin-bottom: map-get($typography-h2, margin-bottom);

    @include media($mq-lap) {
      font-size: map-get($typography-h2, font-size-lap);    
    }

    @include media($mq-desk) {
      font-size: map-get($typography-h2, font-size-desk);    
    }

    @if $invert == "inverted" {
      color: map-get($typography-h2, color-inverted);    
    }
    @else {
      color: map-get($typography-h2, color);    
    }
  }

  @if $level == 3 {
    font-family: map-get($typography-h3, font-family);    
    font-weight: map-get($typography-h3, font-weight);    
    font-size: map-get($typography-h3, font-size-palm);    
    line-height: map-get($typography-h3, line-height);    
    color: map-get($typography-h3, color);    
    text-transform: map-get($typography-h3, text-transform);    
    text-decoration: map-get($typography-h3, text-decoration);    

    @include media($mq-lap) {
      font-size: map-get($typography-h3, font-size-lap);    
    }

    @include media($mq-desk) {
      font-size: map-get($typography-h3, font-size-desk);    
    }

    @if $invert == "inverted" {
      color: map-get($typography-h3, color-inverted);    
    }
    @else {
      color: map-get($typography-h3, color);    
    }
  }

  @if $level == 4 {
    font-family: map-get($typography-h4, font-family);    
    font-weight: map-get($typography-h4, font-weight);    
    font-size: map-get($typography-h4, font-size-palm);    
    line-height: map-get($typography-h4, line-height);    
    color: map-get($typography-h4, color);    
    text-transform: map-get($typography-h4, text-transform);    
    text-decoration: map-get($typography-h4, text-decoration);    

    @include media($mq-lap) {
      font-size: map-get($typography-h4, font-size-lap);    
    }

    @include media($mq-desk) {
      font-size: map-get($typography-h4, font-size-desk);    
    }

    @if $invert == "inverted" {
      color: map-get($typography-h4, color-inverted);    
    }
    @else {
      color: map-get($typography-h4, color);    
    }
  }

  @if $level == 5 {
    font-family: map-get($typography-h5, font-family);    
    font-weight: map-get($typography-h5, font-weight);    
    font-size: map-get($typography-h5, font-size-palm);    
    line-height: map-get($typography-h5, line-height);    
    color: map-get($typography-h5, color);    
    text-transform: map-get($typography-h5, text-transform);    
    text-decoration: map-get($typography-h5, text-decoration);    

    @include media($mq-lap) {
      font-size: map-get($typography-h5, font-size-lap);    
    }

    @include media($mq-desk) {
      font-size: map-get($typography-h5, font-size-desk);    
    }

    @if $invert == "inverted" {
      color: map-get($typography-h5, color-inverted);    
    }
    @else {
      color: map-get($typography-h5, color);    
    }
  }
}
~~~

### nt-hide-text

Hides text of applied element.  Accepts no arguments. Based off of a previous version of the H5BP image replacement method.  I've found it to be far more reliable than the clip method.

~~~ scss
@mixin nt-hide-text {
  font: 0/0 a;
  text-shadow: none;
  color: transparent;
}
~~~

### nt-hr

~~~ scss
@mixin nt-hr($variant: default) {
  $hr-full-width: map-get($typography-hr, full-width);

  @include margin(-1em null null null);
  border: none;
  @include nt-background(map-get($typography-hr, color));
  height: map-get($typography-hr, height);

  @if $hr-full-width == true {
    @include position(absolute, null null null 0);
    @include size(100% null);
  }
}
~~~

### nt-icon

Implements a webfont glyph (typically Fontello).  Needs to be used within a pseudo element (e.g. &:before, &:after).  Accepts a required, named icon, an optional size, and an optional color.  Available icons can be modified by adding directly to the $icons map stack.

~~~ scss
@mixin nt-icon($icon, $size: 16, $color: $color-text) {
  $icons: (
    search: '\e800',
    mail-alt: '\e801',
    mail-squared: '\e802',
    user: '\e803',
    users: '\e804',
    cancel: '\e805',
    cancel-circled: '\e806',
    plus: '\e807',
    plus-circled: '\e808',
    minus: '\e809',
    minus-circled: '\e80a',
    help: '\e80b',
    help-circled: '\e80c',
    info-circled: '\e80d',
    info: '\e80e',
    link-ext: '\e80f',
    quote-left: '\e810',
    quote-right: '\e811',
    share: '\e812',
    share-squared: '\e813',
    print: '\e814',
    comment: '\e815',
    attention-alt: '\e816',
    attention-circled: '\e817',
    location: '\e818',
    file-pdf: '\e819',
    file-word: '\e81a',
    file-excel: '\e81b',
    file-powerpoint: '\e81c',
    file-image: '\e81d',
    file-archive: '\e81e',
    file-video: '\e81f',
    file-audio: '\e820',
    file-code: '\e821',
    rss: '\e822',
    rss-squared: '\e823',
    phone: '\e824',
    phone-squared: '\e825',
    menu: '\e826',
    cog: '\e827',
    down-dir: '\e828',
    up-dir: '\e829',
    right-dir: '\e82a',
    left-dir: '\e82b',
    down-open: '\e82c',
    left-open: '\e82d',
    right-open: '\e82e',
    up-open: '\e82f',
    angle-left: '\e830',
    angle-right: '\e831',
    angle-up: '\e832',
    angle-down: '\e833',
    angle-circled-left: '\e834',
    angle-circled-right: '\e835',
    angle-circled-up: '\e836',
    angle-circled-down: '\e837',
    angle-double-left: '\e838',
    angle-double-right: '\e839',
    angle-double-up: '\e83a',
    angle-double-down: '\e83b',
    down-big: '\e83c',
    left-big: '\e83d',
    right-big: '\e83e',
    up-big: '\e83f',
    left-circled: '\e840',
    right-circled: '\e841',
    up-circled: '\e842',
    down-circled: '\e843',
    play: '\e844',
    play-circled: '\e845',
    desktop: '\e846',
    laptop: '\e847',
    tablet: '\e848',
    mobile: '\e849',
    circle: '\e84a',
    circle-empty: '\e84b',
    dot-circled: '\e84c',
    credit-card: '\e84d',
    sort: '\e84e',
    drupal: '\e84f',
    facebook: '\e850',
    facebook-squared: '\e851',
    gplus: '\e852',
    gplus-squared: '\e853',
    instagramm: '\e854',
    linkedin: '\e855',
    linkedin-squared: '\e856',
    pinterest-circled: '\e857',
    pinterest-squared: '\e858',
    twitter-squared: '\e859',
    twitter: '\e85a',
    youtube: '\e85b',
    youtube-squared: '\e85c',
    youtube-play: '\e85d',
    ok-circled: '\e85e',
    ok: '\e85f',
    basket: '\e860',
    globe: '\e861',
    truck: '\e862',
    lock: '\e863'
  );

  display: inline-block;
  content: map-get($icons, $icon);
  font-family: "fontello";
  font-size: em(strip-units($size));
  font-variant: normal;
  text-align: center;
  text-transform: none;
  color: $color;
}
~~~

### nt-layer

Sets a z-index value based on semantic naming as opposed to explicit integer values.  Accepts a required, named layer.  Hierarchy can be modified by adding directly to the $layers map stack.

~~~ scss
@mixin nt-layer($layer) {
  $layers: (
    roof: 3000,
    loft: 2000,
    ground: 1000,
    basement: -1
  );

  z-index: map-get($layers, $layer);
}
~~~

### nt-max-size

Identical to the Bourbon size mixin, but outputs max-size rules.

~~~ scss
@mixin nt-max-size($size) {
  $height: nth($size, 1);
  $width: $height;

  @if length($size) > 1 {
    $height: nth($size, 2);
  }

  @if $height == auto or (type-of($height) == number and not unitless($height)) {
    max-height: $height;
  }

  @if $width == auto or (type-of($width) == number and not unitless($width)) {
    max-width: $width;
  }
}
~~~

### nt-pattern

This mixin will be documented in a standalone [patterns](#patterns) section.

### nt-rte

Implements styling for (R)ich (T)ext (E)ditors.  Should be used to format the output of a CMS preformatted field.

~~~ scss
@mixin nt-rte($variant: default) {

  h1 {
    @include -heading(1);
  }
  
  h2 {
    @include -heading(2);
  }

  h3 {
    @include -heading(3);
    margin-top: .5em;
  }

  h4 {
    @include -heading(4);
  }

  h5 {
    @include -heading(5);
  }

  p {
    @include -copy;

    @include margin(null null 1em null);

    &:last-child {
      @include margin(null null 0 null);
    }
  }

  em, i {
    font-style: italic;
  }

  strong, b {
    font-weight: $font-weight-bold;
  }

  ul {
    
    li {
      line-height: 1.5;
      font-size: 15px;

      &:before {
        @include -icon(circle, 8, $color-theme-primary);
        @include position(relative, null null .25em null);
        @include size(20px null);
        text-align: left;
      }
    }
  }

  ol {
    counter-reset: counter-list;
    
    li {
      counter-increment: counter-list;
      line-height: 1.5;
      font-size: 15px;

      &:before {
        @include size(20px null);
        display: inline-block;
        content: counter(counter-list) ".";
        color: $color-theme-primary;
        font-weight: $font-weight-bold;
      }
    }
  }

  hr {
    @include -hr;
  }

  img {
    @include -max-size(100% null);
  }

  iframe {
    @include -max-size(100% null);
  }

  a {
    word-wrap: break-word;
  }

  @if $variant == inverted {
    
    p {
      color: $color-text-invert;
    }
  }
}
~~~

