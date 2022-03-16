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
            Project Name</b
          >
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            class="col-2 hoverable btn btn-success"
          >
            Add Sprint
          </button>
          <!--v-for here-->
          <div>
            <Sprint />
          </div>
          <!--v-for here-->
          <Modal id="myModal">
            <template #title>Create Sprint</template>
            <template #body>
              <form @submit="functionHere" class="row">
                <div class="p-2">
                  <input
                    class="col-12 p-2 rounded"
                    type="text"
                    placeholder="Sprint Name"
                  />
                </div>
                <div class="d-flex justify-content-end">
                  <button
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
            <div class="col-3">
              <button class="rounded-circle">
                <i
                  title="delete project"
                  class="mdi fs-3 col-2 hoverable text-end mdi-delete"
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
export default {
  name: 'Projects',
  setup() {
    return {}
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