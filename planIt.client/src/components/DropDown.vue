<template>
  <button @click="moveTask" class="col-12 hoverable p-2 rounded bg-primary">
    {{ sprint.name }}
  </button>
</template>

<script>
import { logger } from "../utils/Logger"
import { tasksService } from '../services/TasksService'
import { ref } from '@vue/reactivity'
export default {
  props: {
    sprint: {
      type: Object,
      required: true
    },
  },
  setup(props) {
    const editable = ref({
      sprintId: props.sprint.id
    })
    return {
      editable,
      async moveTask() {
        logger.log("body is...", editable)
        await tasksService.editTask(props.task.id, editable.value)
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