<template>
  <div class="container-fluid">
    <div class="row p-5 mx-2">
      <div class="col-12">
        <div
          class="bg-light row d-flex justify-content-around p-5 shadow rounded"
        >
          <b class="fs-3 border-bottom border-primary text-primary col-8"
            ><i
              type="button"
              data-bs-toggle="modal"
              data-bs-target="#settingsModal"
              class="mdi rounded hoverable mdi-cog"
              title="edit project"
            ></i>
            {{ project.name }}</b
          >
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            class="col-2 hoverable btn btn-success"
          >
            + Sprint
          </button>
          <!--v-for here-->
          <div v-for="s in sprints" :key="s.id">
            <Sprint :sprint="s" />
          </div>
          <!--v-for here-->
          <Modal id="myModal">
            <template #title>Create Sprint</template>
            <template #body>
              <form @submit.prevent="createSprint" class="row">
                <div class="p-2">
                  <input
                    v-model="editable.name"
                    class="col-12 p-2 rounded"
                    type="text"
                    placeholder="Sprint Name"
                  />
                </div>
                <div class="d-flex justify-content-end">
                  <button
                    @click="createSprint"
                    type="button"
                    class="btn btn-success"
                    data-bs-dismiss="modal"
                  >
                    Create Sprint
                  </button>
                </div>
              </form>
            </template>
          </Modal>
          <div class="row d-flex justify-content-start">
            <div class="col-3 p-2">
              <button
                v-if="account.id == project.creatorId"
                class="rounded-circle btn-secondary"
              >
                <i
                  @click="deleteProject"
                  title="delete project"
                  class="mdi fs-5 col-2 hoverable text-end mdi-delete"
                >
                </i>
              </button>
            </div>
          </div>
        </div>
        <Modal id="settingsModal">
          <template #title>Edit Project</template>
          <template #body>
            <form @submit="functionHere" class="row">
              <div class="p-2">
                <input
                  class="col-12 p-2 rounded"
                  type="text"
                  placeholder="Project Name"
                />
              </div>
              <div class="d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </template>
        </Modal>
        <!-- TODO CHANGE THIS TO DELETE PROJECT? -->
        <Modal id="settingsModal">
          <template #title>Edit Project</template>
          <template #body>
            <form @submit="functionHere" class="row">
              <div class="p-2">
                <input
                  class="col-12 p-2 rounded"
                  type="text"
                  placeholder="Project Name"
                />
              </div>
              <div class="d-flex justify-content-end">
                <button
                  type="button"
                  class="btn btn-success"
                  data-bs-dismiss="modal"
                >
                  Save Changes
                </button>
              </div>
            </form>
          </template>
        </Modal>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, ref, watchEffect } from "@vue/runtime-core"
import { projectsService } from "../services/ProjectsService"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
import { sprintsService } from "../services/SprintsService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
import { router } from '../router'
import { notesService } from '../services/NotesService'

export default {
  name: 'Projects',
  setup() {
    const editable = ref({});
    const route = useRoute();
    onMounted(async () => {
      try {
        await projectsService.getProjectById(route.params.id)
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message)
      }
      try {
        await sprintsService.getSprints(route.params.id)
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message)
      }
      try {
        await notesService.getNotes(route.params.id)
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message)
      }
    })

    return {
      editable,
      async createSprint() {
        try {
          await sprintsService.createSprint(route.params.id, editable.value)
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message)
        }

      },
      async deleteProject() {
        try {
          if (await Pop.confirm()) {
            await projectsService.deleteProject(route.params.id)
            router.push({ name: "Home", path: "/" })
          }

        } catch (error) {
          logger.error(error)
          Pop.toast(error.message)
        }
      },
      project: computed(() => AppState.projects),
      sprints: computed(() => AppState.sprints),
      account: computed(() => AppState.account),
      otherProjects: computed(() => AppState.otherProjects)
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