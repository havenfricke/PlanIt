<template>
  <div class="row border shadow d-flex justify-content-end p-3 me-3">
    <p class="col-12" style="word-wrap: break-word">
      {{ note.body }}
    </p>
    <i
      @click="deleteNote"
      class="col-2 fs-5 mdi mdi-delete text-end hoverable mx-3"
    ></i>
  </div>
</template>

<script>
import { useRoute } from "vue-router"
import { notesService } from "../services/NotesService"
import { logger } from "../utils/Logger"
import Pop from "../utils/Pop"
export default {
  props: {
    note: {
      type: Object,
      required: true,
    }
  },
  setup(props) {

    const route = useRoute()
    return {
      async deleteNote() {
        try {
          await notesService.deleteNote(route.params.id, notes.id)
          if (await Pop.confirm()) {

          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message)
        }
      },
      // notes: computed(() => AppState.notes)
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