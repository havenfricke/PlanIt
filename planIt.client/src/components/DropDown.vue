<template>
  <button @click="functionHere" class="col-12 hoverable p-2 rounded bg-primary">
    {{ sprint.name }}
  </button>
</template>

<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
export default {
  props: {
    sprint: {
      type: Object,
      required: true
    },
    task: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {
      functionHere() {
        if (Pop.confirm('Are you sure you want to move this task?', 'This task will be moved to a different sprint', '', 'Move Task')) {
          logger.log('button working')
        }
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