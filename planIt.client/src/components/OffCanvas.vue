<template>
  <div
    class="offcanvas offcanvas-start bg-secondary"
    tabindex="-1"
    id="offCanvas"
  >
    <div class="offcanvas-header">
      <h5 class="offcanvas-title" id="offCanvasLabel">
        <slot name="title"><!--title slot--></slot>
      </h5>
      <button
        type="button"
        class="btn-close text-reset"
        data-bs-dismiss="offcanvas"
        aria-label="Close"
      ></button>
    </div>
    <div class="offcanvas-body">
      <slot name="body"><!--body slot--></slot>
    </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
</style>