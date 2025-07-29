import { root, style, Variable, StyleBuilder } from '../../base/index.js';

import { defaultConfig } from '../../config/index.js';

export const globalVariables: Record<string, Variable> = {};
export function init(
  config: typeof defaultConfig = defaultConfig,
): StyleBuilder {
  const root_ = root();

  for (let color of config.allColors) {
    let varName = `${color}Color`;
    globalVariables[varName] = root_.createVariable(
      varName,
      config.colorTokens[color],
    );
  }

  globalVariables['mainBg'] = root_.createVariable('mainBg', 'white');
  globalVariables['mainColor'] = root_.createVariable('mainColor', 'black');

  return style([root_]);
}
