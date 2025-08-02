import {
  style,
  value,
  pass,
  args,
  capitalize,
  className,
  Variable,
  StyleBuilder,
  Builder,
} from '../../base/index.js';
import { defaultConfig, Config } from '../../config/index.js';
import { globalVariables } from '../globals/index.js';

export const accordionVariables: Record < string, Variable > = {};
export function init(
  config: Config = defaultConfig,
): StyleBuilder {
  const enabled = config.components.accordion.enabled;
  const accordion = className("accordion");
  accordionVariables["accordionBg"] = accordion.createVariable(
    "accordionBg",
    value(globalVariables["mainBg"])
  );
  
  accordionVariables["accordionColor"] = accordion.createVariable(
    "accordionColor",
    value(globalVariables["mainColor"])
  );
  
  accordion.styles({
    "display": "block",
    "min-height": "0px",
    "background": value(accordionVariables["accordionBg"]),
    "color": value(accordionVariables["accordionColor"])
  });
  
  const accordionHeader = className("accordion-header");
  accordionHeader.styles({
    "display": "flex",
    "alignItems": "center",
    "justifyContent": "space-between",
    "padding": config.spacingTokens.sm
  });
  
  const accordionTitle = className("accordion-title");
  accordionTitle.styles({
    "margin": "0",
    "fontWeight": "normal"
  });
  
  const accordionBtn = className("accordion-btn");
  accordionBtn.styles({
    "background": "transparent",
    "color": value(accordionVariables["accordionColor"]),
    "padding": "8px 8px",
    "border": "none",
    "fontSize": "20px",
    "borderRadius": "50%",
    "transition": "ease 0.3s all"
  });
  
  const accordionBody = className("accordion-body");
  accordionBody.styles({
    "display": "none",
    "padding": config.spacingTokens.md
  });
  
  const accordionActive = accordion.cloneQuery(".active");
  const onActive = [
    accordionActive.child(".accordion-body").styles({
      "display": "block"
    }),
    accordionActive.child(".accordion-btn").styles({
      "transform":"rotate(180deg)"
    })
  ];
  
  
  const all: Builder[] = [
    accordion,
    accordionHeader,
    accordionTitle,
    accordionBtn,
    accordionBody,
    ...onActive
  ];
  
  return style(pass(enabled.root, all, []));
}