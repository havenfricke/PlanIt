<template>
  <div class="container-fluid">
    <div v-if="!user.isAuthenticated" class="row p-5">
      <div class="col-12 rounded shdaow bg-light">
        <h1 class="text-center m-5">Welcome!</h1>
        <p class="text-center mb-5">Please log in or register to use PlanIt.</p>
      </div>
    </div>
    <div v-if="user.isAuthenticated" class="row p-5 mx-2">
      <div class="col-12">
        <div
          class="bg-light row d-flex justify-content-around p-5 shadow rounded"
        >
          <b class="fs-3 border-bottom border-primary text-primary col-8"
            >Projects</b
          >
          <button
            type="button"
            data-bs-toggle="modal"
            data-bs-target="#myModal"
            class="col-2 hoverable btn btn-success"
          >
            Create Project
          </button>

          <Modal id="myModal">
            <template #title>Create a Project</template>
            <template #body>
              <form @submit="functionHere" class="row">
                <div class="p-2">
                  <input
                    class="col-12 p-2 rounded"
                    type="text"
                    placeholder="Project name"
                  />
                </div>
                <div class="d-flex justify-content-end">
                  <button
                    @click="goTo('Projects')"
                    type="button"
                    class="btn btn-success"
                    data-bs-dismiss="modal"
                  >
                    Create Project
                  </button>
                </div>
              </form>
            </template>
          </Modal>

          <div class="row p-5">
            <!--NOTE v-for on div below-->
            <div class="col-12 d-flex justify-content-center">
              <ProjectBanner />
            </div>
            <!--NOTE v-for on div above-->
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from "@vue/reactivity"
import { AppState } from "../AppState"
import { useRouter } from "vue-router"


export default {
  name: 'Home',
  setup() {
    const router = useRouter();
    return {
      user: computed(() => AppState.user),
      goTo(page) {
        router.push({
          name: page,
          params: { id: 123 }
        });
      },
    }
  }
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
.hoverable:hover {
  transform: scale(1.01);
  box-shadow: 0px 15px 10px rgba(0, 0, 0, 0.3);
  transition: 50ms ease-in-out;
}
.hoverable:active {
  transform: scale(0.98);
  transition: 50ms ease-in-out;
}
</style>
