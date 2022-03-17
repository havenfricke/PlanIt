<template>
  <p class="hoverable" @click="goTo()">{{ project.name }}</p>
</template>

<script>
import { useRoute } from "vue-router";
import { router } from "../router";
import { projectsService } from "../services/ProjectsService";
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    return {
      goTo() {
        router.push({
          name: 'Projects',
          params: { id: props.project.id },
        });

      },
    }
  }
}
</script>

<style>
.hoverable:hover {
  transform: scale(1.09);
  filter: drop-shadow(0px 15px 10px rgba(0, 0, 0, 0.3));
  transition: 50ms ease-in-out;
  cursor: pointer;
}
.hoverable:active {
  transform: scale(0.98);
  transition: 50ms ease-in-out;
}
</style>