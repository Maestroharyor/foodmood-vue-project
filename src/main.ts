import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";

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
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(faSearch, faCircleNotch, faPlay);

// CSS
import "./styles/global.css";

// Vuex Store
import { store, key } from "./store";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

createApp(App)
  .use(store, key)
  .component("font-awesome-icon", FontAwesomeIcon)
  .use(router)
  .mount("#app");
