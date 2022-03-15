<template>
  <p
    @click="goTo('Projects')"
    type="button"
    class="p-2 hoverable fs-5 col-8 text-center btn btn-primary rounded"
  >
    Project Name
  </p>
</template>

<script>
import { useRouter } from "vue-router";
export default {
  setup() {
    const router = useRouter();
    return {
      goTo(page) {
        router.push({
          name: page,
          params: { id: 123 },
        });
      },
    }
  }
}
</script>

<style>
</style>