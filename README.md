# Frontend Mentor - Intro section with dropdown navigation solution

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview
Honestly I had a __very__ fun time coding this and I even learnt something new.
### The challenge

Users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![Screenshot](<design/Screenshot 2023-07-17 222328.png>)

### Links

- Solution URL: [here](https://github.com/victor247k/IntroSectionWithDropdownNavigation)
- Live Site URL: [here](https://victor247k.github.io/IntroSectionWithDropdownNavigation/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

How to make code more reusable (in javascript atleast), how to enjoy the process and that the animation doesnt start untill you set something to block. That you have to use another function to call a function that has a parameter.


```html
<button id="features">Features <img src="images/icon-arrow-down.svg" /></button>
```
```css
.wrapper {
  animation-name: fadeIn;
  animation-duration: 300ms;
  animation-timing-function: ease-out;
  animation-fill-mode: forwards;
  height: 100%;
}
@keyframes fadeIn {
    0% {
        background-color: rgba(0, 0, 0, 0);
    }
    100% {
        background-color: rgba(0, 0, 0, 0.67);
    }
}
@keyframes fadeOut {
    100% {
        background-color: rgba(0, 0, 0, 0);
    }
    0% {
        background-color: rgba(0, 0, 0, 0.67);
    }
}
```
```js
featuresBtn.addEventListener("click", () => changeDropdown("Features"));
```


### Continued development

In the future I want to experiment with other frameworks, librarys and to expand my knowledge, I keep coding in vanila, because it is the easier.

### Useful resources

- [Example resource 1](https://developer.mozilla.org/en-US/docs/Web/HTMLhttps://www.example.com) - This helped me understand how to toggle a class on an element.

## Author

- Website - [victor](https://dose.lol/victor)
- Frontend Mentor - [@victor247k](https://www.frontendmentor.io/profile/victor247k)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
- Instagram - [victorspinei247](https://www.instagram.com/victorspinei247/)

## Acknowledgments

I am grateful for this challenge it helped me practice what I allready knew and learn new things
