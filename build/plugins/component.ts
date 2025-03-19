import { resolve } from 'node:path';
/**
 * @name AutoRegistryComponents
 * @description 按需加载，自动引入
 */
import Components from 'unplugin-vue-components/vite';

export const AutoRegistryComponents = () => {
  return Components({
    resolvers: [
      // 自定义解析器，处理 z-paging 组件
      (name) => {
        // 处理 z-paging 相关组件
        if (name.match(/^ZPaging/)) {
          return {
            name,
            from: 'z-paging',
          };
        }
      },
    ],
    // 指定组件所在位置，按需加载
    dirs: [
      'src/components',
      // 可以添加其他组件目录
    ],
    // 配置需要将哪些后缀类型的文件视为组件
    extensions: ['vue'],
    // 配置 type 文件生成位置
    dts: 'src/types/components.d.ts',
  });
};
