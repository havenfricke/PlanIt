<template>
  <div
    class="
      row
      d-flex
      align-items-center
      justify-content-between
      bg-secondary
      fs-5
    "
  >
    <div class="col-6 p-3">
      <!--TODO checkbox-->
      <input v-model="editable.isComplete" @change="editTask" type="checkbox" />
      {{ task.name }}
    </div>
    <i class="mdi mdi-anvil col-2 text-align"> {{ task.weight }}</i>
    <i
      data-bs-toggle="modal"
      data-bs-target="#notesModal"
      title="view task notes"
      class="col-1 hoverable text-end mdi mdi-text"
    ></i>
    <i
      data-bs-toggle="offcanvas"
      data-bs-target="#offCanvas"
      title="edit task"
      class="col-1 hoverable text-center mdi mdi-cog"
    ></i>
    <i
      @click="deleteTask"
      title="delete task"
      class="col-1 hoverable text-start mdi mdi-delete"
    ></i>
  </div>
  <OffCanvas>
    <template #title>
      <h1 class="row">Edit Task</h1>
    </template>
    <template #body>
      <form @submit.prevent="editTask">
        <div class="row p-3">
          <input
            v-model="editable.name"
            type="text"
            class="col-8 rounded"
            placeholder="Edit task name"
          />

          <i class="col-2 text-end fs-4 mdi mdi-anvil"> </i>
          <input
            v-model="editable.weight"
            class="col-2 rounded"
            type="number"
            placeholder="1"
          />
        </div>

        <div class="row p-3">
          <div class="col-12 p-2">
            <span class="col-2">Move task to: </span>
            <div class="row">
              <!--v-for here-->
              <select class="col-12 fs-5 rounded">
                <DropDown />
              </select>
              <!--v-for here-->
            </div>
          </div>
        </div>
        <div class="row d-flex justify-content-end p-3">
          <button @click="editTask" class="col-4 rounded btn-primary">
            Save
          </button>
        </div>
      </form>
    </template>
  </OffCanvas>
  <Modal id="notesModal">
    <template #title>
      <div>{{ task.name }}</div>
    </template>
    <template #body>
      <ul>
        <!--v-for here-->
        <li>
          <Note />
        </li>
        <!--v-for here-->
      </ul>
      <form>
        <div class="row p-3">
          Add a Note:
          <input class="col-12" type="text" />
        </div>
        <div class="row d-flex justify-content-end p-2">
          <button class="col-3 btn btn-success hoverable">Add</button>
        </div>
      </form>
    </template>
  </Modal>
</template>

<script>
import { computed, ref } from "@vue/reactivity";
import { useRoute } from "vue-router";
import { tasksService } from "../services/TasksService";
import { logger } from "../utils/Logger";
import Pop from "../utils/Pop";
import { AppState } from "../AppState";
export default {
  props: {
    task: {
      type: Object,
      required: true
    }
  },
  setup(props) {
    const editable = ref({});
    const route = useRoute();
    return {
      editable,
      async deleteTask() {
        try {
          if (await Pop.confirm()) {
            await tasksService.deleteTask(route.params.id, props.task.id)
          }
        } catch (error) {
          logger.error(error)
        }
      },
      async editTask() {
        try {

          await tasksService.editTask(route.params.id, props.task.id, editable.value)
        } catch (error) {
          logger.error(error)
        }
      },
      tasks: computed(() => AppState.tasks)
    }
  }
}
</script>

<style>
.hoverable:hover {
  transform: scale(1.06);
  filter: drop-shadow(0px 5px 10px rgba(0, 0, 0, 0.3));
  transition: 50ms ease-in-out;
}
.hoverable:active {
  transform: scale(0.98);
  transition: 50ms ease-in-out;
}
</style>