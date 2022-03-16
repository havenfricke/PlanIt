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
          Sprint Name
          <b><i class="mdi mdi-anvil text-end col-2 text-align"> 6</i></b>
        </h4>
        <button
          data-bs-toggle="modal"
          data-bs-target="#taskModal"
          class="col-2 btn hoverable btn-secondary"
        >
          + Task
        </button>
        <p class="col-12 text-end mt-3 text-light">
          <b>0/1 Tasks Completed </b>
        </p>
      </div>
      <!--v-for here-->
      <div>
        <Task />
      </div>
      <!--v-for here-->
    </div>
    <Modal id="taskModal">
      <template #title>Add a task</template>

      <template #body>
        <form @submit="functionHere" class="row">
          <div class="p-2 d-flex justify-content-around align-items-center">
            <input
              class="col-8 p-2 rounded"
              type="text"
              placeholder="Task name"
            />
            <i class="col-2 text-end fs-3 mdi mdi-anvil"> </i>
            <input class="col-2 p-2 rounded" type="number" placeholder="1" />
          </div>
          <div class="d-flex justify-content-end align-items-center">
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
</template>

<script>
export default {

}
</script>

<style>
</style>