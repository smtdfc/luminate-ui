import { parse } from '@babel/parser';
import _traverse from '@babel/traverse';
import _generate from '@babel/generator';
import * as t from '@babel/types';
import { matchClass } from '../config';

const traverse = (
  typeof _traverse === 'function' ? _traverse : (_traverse as any).default
) as any;
const generate = (
  typeof _generate === 'function' ? _generate : (_generate as any).default
) as any;

type Output = {
  code: string;
  classes: string[];
  map: any;
};

export function scan(code: string): Output {
  let classes: string[] = ['root'];
  const ast = parse(code, {
    sourceType: 'module',
    plugins: ['typescript', 'jsx'],
  });

  traverse(ast, {
    CallExpression(path: any) {
      const callee = path.node.callee;

      if (t.isIdentifier(callee, { name: '$ui' })) {
        const args = path.node.arguments;

        if (args.length === 1) {
          const arg = args[0];

          if (t.isStringLiteral(arg)) {
            let raw = arg.value.trim();
            let splitted = raw.split(' ');
            splitted.forEach((v) => {
              if (matchClass(v)) classes.push(v);
            });
            path.replaceWith(t.stringLiteral(arg.value));
          } else if (t.isTemplateLiteral(arg)) {
            path.replaceWith(arg);
          }
        }
      }
    },
  });

  const output = generate(ast, {}, code);
  return {
    code: output.code,
    map: output.map,
    classes,
  };
}
