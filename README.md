# top-drop-down-menu aka my first npm package

## What is it?

a nice little nav menu. it's a little quirky but it's my first original animated element so I like it.

## TODO

- collapse when I click anywhere outside the menu

## See it Live (only focus on toggle, rest of the page is not? included in module)

[Demo](https://mohamedbechirmejri.github.io/top-drop-down-menu/)

## installation

`npm install top-drop-down-menu`

## How to use

### import main,js into your project

`import 'top-drop-down-menu/src/main'`

### import main.scss file into your main style.scss

`@use 'top-drop-down-menu/src/main'`

### add this to your html file

```html
<nav class="nav">
  <button class="navtoggle"><span class="hamburger"></span></button>
  <div class="navlinks invisible hidden">
    <div class="navlink-container">
      <a class="navlink" href="#">Home</a>
      <a class="navlink" href="#">About</a>
      <a class="navlink" href="#">Contact</a>
    </div>
  </div>
</nav>
```
