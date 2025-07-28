import {
  className,
  cloneQueryStr,
  style
} from '../base/index.js';

const button = className("btn");
button.style({
  "background": "none",
  "border": "none"
})

const buttonPrimary = cloneQueryStr(button).className("btn-primary");
buttonPrimary.style({
  "background": "var(--btn-primary-color)",
  "border": "none"
})

const btnStyle = style([
  button,
  buttonPrimary
])

export default btnStyle;