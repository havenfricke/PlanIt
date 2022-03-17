<template>
  <p class="dropdown-item" href="#">{{ project }}</p>
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