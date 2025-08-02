import { root, style,allElement, Variable, StyleBuilder } from '../../base/index.js';
import { defaultConfig,Config } from '../../config/index.js';

export const globalVariables: Record<string, Variable> = {};
export function init(
  config: Config = defaultConfig,
): StyleBuilder {
  const root_ = root();

  for (let color of config.allColors) {
    let varName = `${color}Color`;
    globalVariables[varName] = root_.createVariable(
      varName,
      config.colorTokens[color],
    );
  }
  
  const allEle = allElement().styles({
    "margin":"0",
    "padding":"0",
    "boxSizing":"border-box"
  });

  globalVariables['mainBg'] = root_.createVariable('mainBg', 'white');
  globalVariables['mainColor'] = root_.createVariable('mainColor', 'black');

  return style([root_,allEle]);
}
