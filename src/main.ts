import { createPinia } from "pinia";
import { createApp } from "vue";
import { VuesticPlugin } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
  .use(createPinia())
  .use(VuesticPlugin, {
    colors: {
      // Default colors
      primary: "#23e066",
      secondary: "#002c85",
      success: "#40e583",
      info: "#2c82e0",
      danger: "#e34b4a",
      warning: "#ffc200",
      gray: "#babfc2",
      dark: "#34495e",
      background: "#f4f8fa",

      // Custom colors
      b_yellow: "#FFD013",
      b_salmon: "#EE405B",
      b_pink: "#DC00E0",
      b_purple: "#7771FF",
      b_blue: "#1F8CEB",
      b_darkblue: "#000A70",
      b_green: "#19D5b2",
      b_grey: "#394455",
      b_white: "#FFFFFF",
      b_offwhite: "#f7f8fa",
    },
  })
  .mount("#app");
