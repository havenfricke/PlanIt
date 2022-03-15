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
      data-bs-toggle="offcanvas"
      data-bs-target="#offCanvas"
      title="edit task"
      class="col-1 hoverable text-end mdi mdi-cog"
    ></i>
    <i
      title="delete task"
      class="col-1 hoverable text-start mdi mdi-delete"
    ></i>
  </div>
  <OffCanvas>
    <template #title>
      <h1>Edit Task</h1>
    </template>
    <template #body>
      <form>
        <input type="text" />
        <input type="text" />
        <div class="dropdown mt-3">
          <button
            class="btn btn-secondary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-bs-toggle="dropdown"
          >
            Task Options
          </button>
          <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </div>
      </form>
    </template>
  </OffCanvas>
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