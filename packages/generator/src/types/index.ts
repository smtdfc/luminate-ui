import {CSSGenerator} from '../base/index.js';
import type {Config} from '../config/index.js';


export type GeneratorFn = (config: Config, generator: CSSGenerator) => string;
export type GeneratorMap = Map < string, GeneratorFn > ;
