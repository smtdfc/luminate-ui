import { defaultConfig, Config } from '../config/index.js';
import { GeneratorFn, GeneratorMap } from '../types/index.js';
import button from './button.js';
import accordion from './accordion.js';
import form from './form.js';
import heading from './heading.js';
import table from './table.js';
import card from './card.js';
import navbar from './navbar.js';
import offcanvas from './offcanvas.js';
import menu from './menu.js';
import list from './list.js';
import toast from './toast.js';
import loader from './loader.js';
import badge from './badge.js';

export default function (map: GeneratorMap) {
  button(map);
  accordion(map);
  form(map);
  heading(map);
  table(map);
  card(map);
  navbar(map);
  offcanvas(map);
  menu(map);
  list(map);
  toast(map);
  loader(map);
  badge(map);
}
