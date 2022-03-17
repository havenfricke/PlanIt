<template>
  <div class="row p-3">
    <div class="col-12">
      <div
        class="
          row
          d-flex
          justify-content-around
          align-items0center
          p-3
          bg-gradient
          rounded-top
        "
      >
        <h4 class="mx-3 col-8 text-light">
          {{ sprint.name }}
          <b
            ><i class="mdi mdi-anvil text-end col-2 text-align-bottom">
              {{ totalWeight }}</i
            ></b
          >
        </h4>
        <button
          data-bs-toggle="modal"
          data-bs-target="#taskModal"
          class="col-2 btn hoverable btn-secondary"
        >
          + Task
        </button>
        <div class="col-12 d-flex justify-content-end">
          <i
            @click="deleteSprint"
            class="mdi mx-3 hoverable mdi-delete text-light fs-2"
          ></i>
        </div>
        <p class="col-12 text-end mt-3 text-light">
          <b></b>
        </p>
      </div>
      <!--v-for here-->
      <div v-for="t in theseTasks" :key="t.id">
        <Task :task="t" />
      </div>
      <!--v-for here-->
    </div>
    <Modal id="taskModal">
      <template #title>Add a task</template>

      <template #body>
        <form @submit="createTask" class="row">
          <div class="p-2 d-flex justify-content-around align-items-center">
            <input
              required
              v-model="editable.name"
              class="col-8 p-2 rounded"
              type="text"
              placeholder="Task name"
            />
            <i class="col-2 text-end fs-3 mdi mdi-anvil"> </i>
            <input
              required
              v-model="editable.weight"
              class="col-2 p-2 rounded"
              type="number"
              placeholder="1"
              min="1"
              max="10"
            />
          </div>
          <div class="d-flex justify-content-end align-items-center">
            <button
              @click="createTask(sprint.id)"
              type="button"
              class="btn btn-success"
            >
              Save Changes
            </button>
          </div>
        </form>
      </template>
    </Modal>
  </div>
</template>

<script>
import { computed, ref } from "@vue/reactivity"
import { AppState } from "../AppState"
import { sprintsService } from "../services/SprintsService"
import { useRoute } from "vue-router"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { onMounted, watchEffect } from "@vue/runtime-core"
import { tasksService } from "../services/TasksService"
export default {
  props: {
    sprint: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const route = useRoute();
    const editable = ref({
      sprintId: props.sprint.id
    });
    onMounted(async () => {
      try {
        await tasksService.getTasks(route.params.id)
      } catch (error) {
        logger.log(error)
        Pop.toast(error.message)
      }
    });
    return {
      editable,
      async createTask(sprintId) {
        try {
          editable.sprintId = sprintId
          await tasksService.createTask(route.params.id, editable.value)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message)
        }
      },

      async deleteSprint() {
        try {
          if (await Pop.confirm()) {
            await sprintsService.deleteSprint(route.params.id, props.sprint.id)
          }
        } catch (error) {
          logger.log(error)
          Pop.toast(error.message)
        }
      },
      theseTasks: computed(() => AppState.tasks.filter(t => t.sprintId == props.sprint.id)),

      // FIXME GET THIS TO WORK
      totalTaskWeight: computed(() => {
        let tasksToWeigh = AppState.tasks.filter(t => t.sprintId == props.sprint.id)
        let totalWeight = 0
        for (let i = 0; i < tasksToWeigh.length; i++) {
          tasksToWeigh[i].weight += totalWeight
          logger.log(tasksToWeigh[i].weight)
        }
        return totalWeight





      })

    }
  }

}
</script>

<style>
</style>