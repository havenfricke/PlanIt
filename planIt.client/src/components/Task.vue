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
      <input
        v-model="editable.isComplete"
        @change="editTask"
        :checked="task.isComplete"
        type="checkbox"
      />
      {{ task.name }}
    </div>
    <i class="mdi mdi-anvil col-2 text-align"> {{ task.weight }}</i>
    <i
      data-bs-toggle="modal"
      :data-bs-target="'#notesModal' + task.id"
      title="view task notes"
      class="col-1 hoverable text-end mdi mdi-text"
    ></i>
    <i
      v-if="account.id == task.creatorId"
      data-bs-toggle="offcanvas"
      :data-bs-target="'#offCanvas' + task.id"
      title="edit task"
      class="col-1 hoverable text-center mdi mdi-cog"
    ></i>
    <i
      v-if="account.id == task.creatorId"
      @click="deleteTask"
      title="delete task"
      class="col-1 hoverable text-start mdi mdi-delete"
    ></i>
  </div>
  <OffCanvas :id="'offCanvas' + task.id">
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
          <div class="row d-flex justify-content-end mt-3">
            <button @click="editTask" class="col-4 rounded btn-primary">
              Save
            </button>
          </div>
        </div>
      </form>

      <div class="row p-3">
        <div class="col-12 p-2">
          <span class="col-2 text-center fs-3">Move task to</span>
          <div class="row">
            <!--v-for here-->
            <ul v-for="s in sprints" :key="s.id">
              <button
                :sprint="s"
                @click="moveTask(s.id)"
                class="col-12 hoverable p-2 rounded bg-primary"
              >
                {{ s.name }}
              </button>
            </ul>
            <!--v-for here-->
          </div>
        </div>
      </div>
    </template>
  </OffCanvas>
  <Modal :id="'notesModal' + task.id">
    <template #title>
      <div>{{ task.name }}</div>
    </template>
    <template #body>
      <div
        class="p-2"
        style="
          height: 50vh;
          width: auto;
          border: 1px solid #ccc;
          overflow: auto;
        "
      >
        <ul v-for="n in theseNotes" :key="n.id">
          <!--v-for here-->
          <Note :note="n" />
          <!--v-for here-->
        </ul>
      </div>
      <form @sumbit.prevent="createNote">
        <div class="row p-3">
          Add a Note:
          <input v-model="editable.body" class="col-12" type="text" />
        </div>
        <div class="row d-flex justify-content-end p-2">
          <button @click="createNote" class="col-3 btn btn-success hoverable">
            Add
          </button>
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
import { notesService } from "../services/NotesService";
export default {
  props: {
    task: {
      type: Object,
      required: true
    },
  },
  setup(props) {
    const editable = ref({
      taskId: props.task.id
    });
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
          Pop.toast(error.message)
        }
      },
      async editTask() {
        try {
          await tasksService.editTask(route.params.id, props.task.id, editable.value)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message)
        }
      },
      async moveTask(sprintId) {
        try {
          editable.value.sprintId = sprintId
          await tasksService.editTask(route.params.id, props.task.id, editable.value)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message)
        }
      },
      async createNote() {
        try {
          await notesService.createNote(route.params.id, editable.value)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message)
        }
      },
      theseNotes: computed(() => AppState.notes.filter(n => n.taskId == props.task.id)),
      sprints: computed(() => AppState.sprints.filter(s => s.id != props.task.sprintId)),
      account: computed(() => AppState.account),
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