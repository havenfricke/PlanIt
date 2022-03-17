<template>
  <p class="dropdown-item" href="#">{{ project.name }}</p>
</template>

<script>
export default {
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  setup() {
    return {}
  }
}
</script>

<style>
</style>