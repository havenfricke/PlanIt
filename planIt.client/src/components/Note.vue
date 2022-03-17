<template>
  <div class="row border shadow d-flex justify-content-end p-3 me-3">
    <p class="col-12" style="word-wrap: break-word">
      {{ note.body }}
    </p>
    <p>-{{ note.creator.name }}</p>
    <img class="img-fluid" :src="note.creator.picture" alt="No_picture" />
    <i
      v-if="note.creatorId == account.id"
      @click="deleteNote"
      class="col-2 fs-5 mdi mdi-delete text-end hoverable mx-3"
    ></i>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity"
import { useRoute } from "vue-router"
import { AppState } from "../AppState"
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
          if (await Pop.confirm()) {
            await notesService.deleteNote(route.params.id, props.note.id)
          }
        } catch (error) {
          logger.error(error)
          Pop.toast(error.message)
        }
      },
      account: computed(() => AppState.account)
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