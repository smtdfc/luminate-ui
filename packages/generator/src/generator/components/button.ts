import {
  style,
  value,
  pass,
  args,
  capitalize,
  className,
  Variable,
  StyleBuilder,
  Builder
} from '../../base/index.js';

import {
  defaultConfig
} from '../../config/index.js';

import {
  globalVariables
} from '../globals/index.js';

export const buttonVariables: Record < string, Variable > = {};
export function init(config: typeof defaultConfig = defaultConfig): StyleBuilder {
  
  const enabled = config.components.button.enabled;
  const button = className("btn");
  buttonVariables["btnBg"] = button.createVariable(
    "btnBg",
    "transparent"
  );
  
  buttonVariables["btnColor"] = button.createVariable(
    "btnColor",
    value(globalVariables["mainColor"])
  );
  
  buttonVariables["btnBorderColor"] = button.createVariable(
    "btnBorderColor",
    value(buttonVariables["btnColor"])
  );
  
  button.styles({
    "background": value(buttonVariables["btnBg"]),
    "color": value(buttonVariables["btnColor"]),
    "border": args(
      "solid",
      "1.5px",
      buttonVariables["btnBorderColor"]
    ),
    "transition": "ease 0.3s all",
    "borderRadius": "10px",
    "margin": config.spacingTokens.sm,
    "padding": config.components.button.padding.md,
  });
  
  const all:Builder[] = [button];
  
  if (enabled.spacing) {
    const buttonSpacing = config.spacings.map(v => {
      return className(`btn-${v}`).styles({
        "margin": config.spacingTokens[v],
        "padding": config.components.button.padding[v],
      });
    });
    all.push(...buttonSpacing);
  }
  
  if (enabled.variant) {
    const buttonVariants = config.baseColors.map(v => {
      return className(`btn-${v}`)
        .setVariable(
          buttonVariables["btnColor"],
          value(globalVariables[`on${capitalize(v)}Color`])
        )
        .setVariable(
          buttonVariables["btnBg"],
          value(globalVariables[`${v}Color`])
        )
        .setVariable(
          buttonVariables["btnBorderColor"],
          value(globalVariables[`${v}Color`])
        );
    });
    all.push(...buttonVariants);
  }
  
  
  if (enabled.outlineVariant) {
    const buttonOutlineVariants = config.baseColors.flatMap(v => {
      let outlineButton = className(`btn-outline-${v}`)
        .setVariable(
          buttonVariables["btnColor"],
          value(globalVariables[`${v}Color`])
        )
        .setVariable(
          buttonVariables["btnBg"],
          "transparent"
        )
        .setVariable(
          buttonVariables["btnBorderColor"],
          value(globalVariables[`${v}Color`])
        );
      
      let outlineButtonHover = outlineButton.cloneQuery(':hover')
        .setVariable(
          buttonVariables["btnColor"],
          value(globalVariables[`on${capitalize(v)}Color`])
        )
        .setVariable(
          buttonVariables["btnBg"],
          value(globalVariables[`${v}Color`])
        );
      
      return [outlineButton, outlineButtonHover];
    });
    all.push(...buttonOutlineVariants);
  }
  
  return style(
    pass(enabled.root, all, [])
  );
}