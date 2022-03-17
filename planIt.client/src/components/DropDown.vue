<template>
  <button @click="functionHere" class="col-12">Sprint Name</button>
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
    }
  },
  setup() {
    return {
      functionHere() {
        if (Pop.confirm('Are you sure you want to move this task?', 'This task will be moved to {{sprint name}}', '', 'Move Task')) {
          logger.log('button working')
        }
      },
      sprint: computed(() => AppState.sprints)
    }
  }
}

</script>

<style>
</style>