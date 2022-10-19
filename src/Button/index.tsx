import KButton from "./Button";
import { App } from "vue";

// 导出Button组件
export { KButton };

// 组件默认作为插件导出，按需引入
export default {
  install(app: App) {
    app.component(KButton.name, KButton);
  },
};
