<template>
  <p
    @click="goTo('Projects')"
    type="button"
    class="p-2 hoverable fs-5 col-8 text-center btn btn-primary rounded"
  >
    {{ project.name }}
  </p>
</template>

<script>
import { useRouter } from "vue-router";

export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const router = useRouter();
    return {
      goTo(page) {
        router.push({
          name: page,
          params: { id: props.project.id },
        });
      }
    }
  }
}
</script>

<style>
</style>