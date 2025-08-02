import {
  style,
  value,
  pass,
  args,
  capitalize,
  className,
  mediaQuery,
  Variable,
  StyleBuilder,
  Builder,
} from '../../base/index.js';
import { defaultConfig, Config } from '../../config/index.js';
import { globalVariables } from '../globals/index.js';

const cardVariables: Record < string, Variable >= {};

export function init(
  config: Config = defaultConfig,
): StyleBuilder {
  
  
  const enabled = config.components.card.enabled;
  const card = className("card");
  
  cardVariables["cardColor"] = card.createVariable(
    "cardColor",
    value(globalVariables["mainColor"])
  );
  
  card.styles({
    "boxSizing": "border-box",
    "borderRadius": "12px",
    "margin": config.spacingTokens.sm,
    "boxShadow": "0 4px 6px rgba(0, 0, 0, 0.1), 0 1px 3px rgba(0, 0, 0, 0.08)"
  });
  
  card.child("img").styles({
    width: "100%",
    height: "auto",
    display: "block",
    objectFit: "cover"
  });
  
  const cardHeader = className("card-header");
  cardHeader.styles({
    "display": "flex",
    "alignItems": "center",
    "padding": config.spacingTokens.md
  });
  
  cardHeader.child(".card-btn").styles({
    "margin-left": "auto"
  });
  
  const cardTitle = className("card-title");
  cardTitle.styles({
    "margin": "0",
    "fontWeight": "normal"
  });
  
  const cardSubText = className("card-sub-text");
  cardSubText.styles({
    "margin": "0",
    "fontSize": "14px",
    "color": "gray",
    "fontWeight": "normal"
  });
  
  const cardBody = className("card-body");
  cardBody.styles({
    "display": "block",
    "boxSizing": "border-box",
    "padding": config.spacingTokens.md
  });
  
  const cardBtn = className("card-btn");
  cardBtn.styles({
    "background": "transparent",
    "border": "none",
    "color": value(cardVariables["cardColor"]),
    "padding": config.spacingTokens.sm,
    "transition": "ease 0.3s all"
  });
  
  const cardImgTop = className("card-img-top");
  cardImgTop.styles({
    "borderTopLeftRadius": "12px",
    "borderTopRightRadius": "12px",
  });
  
  const cardImgBottom = className("card-img-bottom");
  cardImgBottom.styles({
    "borderBottomLeftRadius": "12px",
    "borderBottomRightRadius": "12px",
  });
  
  const cardFooter = className("card-footer");
  cardFooter.styles({
    "display": "flex",
    "alignItems": "center",
    "padding": config.spacingTokens.md
  });
  
  cardFooter.child(".card-btn").styles({
    "margin-left": "auto"
  });
  
  const cardGroup = className("card-group");
  cardGroup.styles({
    "display": "flex",
    "columnGap": "10px",
    "maxWidth": "100vw!important",
    "overflowX": "scroll",
    "height": "auto"
  });
  
  const responsiveMobileCard = mediaQuery("(max-width: 48rem)", [
    cardGroup.clone().child(".card").styles({
      width: "95%",
      flexShrink: "0",
    }),
    
  ]);
  
  const responsivePcCard = mediaQuery("(min-width: 48rem)", [
    cardGroup.clone().child(".card").styles({
      width: "350px",
      flexShrink: "0",
    }),
    
    cardGroup.clone().styles({
      paddingLeft: "16px",
    })
  ]);
  
  const all: Builder[] = [
    card,
    cardHeader,
    cardTitle,
    cardSubText,
    cardBody,
    cardBtn,
    cardImgTop,
    cardImgBottom,
    cardFooter,
    cardGroup,
    responsiveMobileCard,
    responsivePcCard
  ];
  
  
  return style(pass(enabled.root, all, []));
}