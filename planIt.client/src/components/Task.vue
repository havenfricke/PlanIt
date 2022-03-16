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
      <input type="checkbox" />
      Task Name
    </div>
    <i class="mdi mdi-anvil col-2 text-align"> 6</i>
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
      title="delete task"
      class="col-1 hoverable text-start mdi mdi-delete"
    ></i>
  </div>
  <OffCanvas>
    <template #title>
      <h1 class="row">Edit Task</h1>
    </template>
    <template #body>
      <form>
        <div class="row p-3">
          <input
            type="text"
            class="col-8 rounded"
            placeholder="Edit task name"
          />

          <i class="col-2 text-end fs-4 mdi mdi-anvil"> </i>
          <input class="col-2 rounded" type="number" placeholder="1" />
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
          <button class="col-4 rounded btn-primary">Save</button>
        </div>
      </form>
    </template>
  </OffCanvas>
  <Modal id="notesModal">
    <template #title>
      <div>Task Name</div>
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
export default {
  setup() {
    return {}
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