<template>
  <div class="container-fluid">
    <div class="row p-5 mx-2">
      <div class="col-12">
        <div
          class="bg-light row d-flex justify-content-around p-5 shadow rounded"
        >
          <b class="fs-3 col-8">Projects</b>
          <button class="col-2 btn btn-success">Create Project</button>

          <div class="row d-flex justify-content-around p-2">
            <div class="p-3 col-5 text-center btn btn-secondary rounded">
              Project 1
            </div>
            <div class="p-3 col-5 text-center btn btn-secondary rounded">
              Project 2
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Home'
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;
  .home-card {
    width: 50vw;
    > img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
