// vuex.d.ts
import { Store } from "vuex";
import { storeState } from "./data/dataTypes";

declare module "@vue/runtime-core" {
  // provide typings for `this.$store`
  interface ComponentCustomProperties {
    $store: Store<storeState>;
  }
}
