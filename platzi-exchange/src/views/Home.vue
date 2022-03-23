<template>
  <px-assets-table :assets="assets" />
</template>

<script>
import api from "@/api";
import PxAssetsTable from "@/components/PxAssetsTable";

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: "Home",
  // eslint-disable-next-line vue/no-unused-components
  components: { PxAssetsTable },

  data() {
    return {
      assets: [],
    };
  },

  created() {
    api.getAssets().then((assets) => (this.assets = assets));
  },
};
</script>
