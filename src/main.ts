import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";

/* import the fontawesome */
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { faRotate } from "@fortawesome/free-solid-svg-icons";
import "./assets/main.css";

/* add icons to the library */
library.add(faRotate);

const app = createApp(App);

app
  .use(createPinia())
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
