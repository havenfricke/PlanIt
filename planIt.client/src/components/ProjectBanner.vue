<template>
  <p
    v-if="account.id == project.creatorId"
    @click="goTo('Projects')"
    type="button"
    class="p-2 hoverable fs-5 col-8 text-center btn btn-primary rounded"
  >
    {{ project.name }}
  </p>
</template>

<script>
import { computed } from "@vue/reactivity";
import { useRouter } from "vue-router";
import { AppState } from "../AppState";

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
      },
      account: computed(() => AppState.account)
    }
  }
}
</script>

<style>
</style>