import { createApp } from "vue";
import { VuesticPlugin } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";
import App from "./App.vue";
import router from "./router";

createApp(App)
  .use(router)
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

      // Custom colors
      yellow: "#FFD013",
      salmon: "#EE405B",
      pink: "#DC00E0",
      purple: "#7771FF",
      blue: "1F8CEB",
      darkblue: "#000A70",
      green: "#19D5b2",
      grey: "#394455",
    },
  })
  .mount("#app");
