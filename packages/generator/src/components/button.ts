import {
  className,
  cloneQueryStr,
  style
} from '../base/index.js';

const button = className("btn");
button.style({
  "padding":"10px",
  "background": "none",
  "border": "none"
})

const buttonPrimary = cloneQueryStr(button).className("btn-primary");
buttonPrimary.style({
  "background": "green",
})

const btnStyle = style([
  button,
  buttonPrimary
])

export default btnStyle;