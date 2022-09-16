import KButton from "./Button";
import { App } from "vue";

// 导出Button组件
export { KButton };

// 导出Vue插件
export default {
  install(app: App) {
    app.component(KButton.name, KButton);
  },
};
