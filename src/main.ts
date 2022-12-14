import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import VueMeta from "vue-meta";

// Fonts
import "@fontsource/koho/200.css";
import "@fontsource/koho/300.css";
import "@fontsource/koho/400.css";
import "@fontsource/koho/500.css";
import "@fontsource/koho/600.css";
import "@fontsource/koho/700.css";

// Font Awesome
/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faSearch,
  faCircleNotch,
  faPlay,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faSearch, faCircleNotch, faPlay, faBars, faClose);

// CSS
import "./styles/global.css";

// Vuex Store
import { store, key } from "./store";

createApp(App)
  .use(store, key)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
