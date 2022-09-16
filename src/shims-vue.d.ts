/*
 * @Author: linkg
 * @Email: linkg@hxmec.com
 * @Date: 2022-09-05 13:49:51
 * @lastModifiedBy: linkg
 * @lastModifiedTime: 2022-09-05 13:49:51
 * @Description: vue模块类型定义
 */

declare module "*.vue" {
  import { DefineComponent } from "vue";
  const component: DefineComponent<{}, {}, any>;
  export default component;
}
