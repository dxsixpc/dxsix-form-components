// rollup.config.js
import resolve from 'rollup-plugin-node-resolve';
import babel from 'rollup-plugin-babel';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';
import { eslint } from 'rollup-plugin-eslint';

// eslint-disable-next-line
export default {
  // 核心选项
  input: 'src/index.tsx', // 必须
  plugins: [
    resolve({
      // 将自定义选项传递给解析插件
      customResolveOptions: {
        moduleDirectory: 'node_modules'
      }
    }),
    babel({
      exclude: 'node_modules/**', // 防止打包node_modules下的文件
      runtimeHelpers: true // 使plugin-transform-runtime生效
    }),
    commonjs(), // 这样 Rollup 能转换 `ms` 为一个ES模块
    eslint({
      throwOnError: true,
      throwOnWarning: true,
      include: ['src/**'],
      exclude: ['node_modules/**']
    }),
    babel(),
    terser()
  ],
  output: {
    // 必须 (如果要输出多个，可以是一个数组)
    // 核心选项
    file: 'dist/bundle.js', // 必须
    format: 'cjs' // 必须
  },
  // 指出应将哪些模块视为外部模块
  external: ['lodash']
};
