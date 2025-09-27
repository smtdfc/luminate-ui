var __assign =
  (this && this.__assign) ||
  function () {
    __assign =
      Object.assign ||
      function (t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];
          for (var p in s)
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
      };
    return __assign.apply(this, arguments);
  };
var Keyframes = /** @class */ (function () {
  function Keyframes(name, frames) {
    this.name = name;
    this.frames = frames;
  }
  Keyframes.prototype.generator = function () {
    var _this = this;
    var blocks = Object.entries(this.frames)
      .map(function (_a) {
        var step = _a[0],
          styles = _a[1];
        var body = Object.entries(styles)
          .map(function (_a) {
            var key = _a[0],
              value = _a[1];
            return ''.concat(_this.normalizeKey(key), ': ').concat(value, ';');
          })
          .join(' ');
        return ''.concat(step, ' { ').concat(body, ' }');
      })
      .join(' ');
    return '@keyframes '.concat(this.name, ' { ').concat(blocks, ' }');
  };
  Keyframes.prototype.normalizeKey = function (key) {
    return key.replace(/[A-Z]/g, function (match) {
      return '-' + match.toLowerCase();
    });
  };
  return Keyframes;
})();
var MediaQuery = /** @class */ (function () {
  function MediaQuery(condition, items) {
    if (items === void 0) {
      items = [];
    }
    this.condition = condition;
    this.items = items;
  }
  MediaQuery.prototype.generator = function () {
    var rules = this.items
      .map(function (item) {
        return item.generator();
      })
      .join('\n');
    return '@media '.concat(this.condition, ' {\n').concat(rules, '\n}');
  };
  return MediaQuery;
})();
var QueryBuilder = /** @class */ (function () {
  function QueryBuilder(query) {
    this.query = query;
    this._style = new StyleSheet({});
  }
  QueryBuilder.prototype.tag = function (name) {
    this.query += name + ' ';
    return this;
  };
  QueryBuilder.prototype.id = function (name) {
    this.query += '#'.concat(name);
    return this;
  };
  QueryBuilder.prototype.className = function (name) {
    this.query += '.'.concat(name);
    return this;
  };
  QueryBuilder.prototype.style = function (d) {
    this._style.merge(new StyleSheet(d));
    return this;
  };
  QueryBuilder.prototype.pseudo = function (className) {
    this.query += ':'.concat(className);
    return this;
  };
  QueryBuilder.prototype.pseudoElement = function (name) {
    this.query += '::'.concat(name);
    return this;
  };
  QueryBuilder.prototype.child = function (selector) {
    this.query += ' '.concat(selector);
    return this;
  };
  QueryBuilder.prototype.generator = function () {
    var selector = this.query.trim();
    var style = this._style.generator();
    return selector ? ''.concat(selector, ' { ').concat(style, ' }') : '';
  };
  return QueryBuilder;
})();
var StyleSheet = /** @class */ (function () {
  function StyleSheet(styles) {
    this.styles = styles;
  }
  StyleSheet.prototype.merge = function (styleSheet) {
    this.styles = __assign(__assign({}, this.styles), styleSheet.styles);
  };
  StyleSheet.prototype.generator = function () {
    var _this = this;
    return Object.entries(this.styles)
      .map(function (_a) {
        var key = _a[0],
          value = _a[1];
        return ''.concat(_this.normalizeKey(key), ': ').concat(value, ';');
      })
      .join(' ');
  };
  StyleSheet.prototype.normalizeKey = function (key) {
    return key.replace(/[A-Z]/g, function (match) {
      return '-' + match.toLowerCase();
    });
  };
  return StyleSheet;
})();
var Style = /** @class */ (function () {
  function Style(items) {
    if (items === void 0) {
      items = [];
    }
    this.items = items;
  }
  Style.prototype.generator = function () {
    return this.items
      .map(function (item) {
        return item.generator();
      })
      .join('\n');
  };
  return Style;
})();
function toStr(q) {
  return new QueryBuilder(q.query);
}
function style(items) {
  var _a;
  var result = new Style();
  for (var _i = 0, items_1 = items; _i < items_1.length; _i++) {
    var item = items_1[_i];
    if (item instanceof MediaQuery) {
      result.items.push(item);
    } else if (item instanceof Style) {
      (_a = result.items).push.apply(_a, item.items);
    }
  }
  return result;
}
function keyframes(name, frames) {
  return new Keyframes(name, frames);
}
function query(q) {
  return new QueryBuilder(q);
}
function id(q) {
  return new QueryBuilder('').id(q);
}
function className(q) {
  return new QueryBuilder('').className(q);
}
function tag(q) {
  return new QueryBuilder('').tag(q);
}
function extractPatternMatches(classList, patterns) {
  var result = [];
  for (var _i = 0, patterns_1 = patterns; _i < patterns_1.length; _i++) {
    var pattern = patterns_1[_i];
    var prefix = pattern.replace('-*', '');
    var values = [];
    for (var _a = 0, classList_1 = classList; _a < classList_1.length; _a++) {
      var className_1 = classList_1[_a];
      if (className_1.startsWith(prefix + '-')) {
        var suffix = className_1.slice(prefix.length + 1);
        values.push(suffix);
      }
    }
    if (values.length > 0) {
      result.push({ prefix: prefix, values: values });
    }
  }
  return result;
}
