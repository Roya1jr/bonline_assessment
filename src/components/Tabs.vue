<template>
  <div class="tabs">
    <div class="tab-item">
      <va-sidebar-item active-color="b_blue" active>
        <va-sidebar-item-content>
          <va-sidebar-item-title style="text-align: center">
            <va-icon name="home" />
            Home
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
    </div>
    <div class="tab-item">
      <va-sidebar-item active-color="b_blue">
        <va-sidebar-item-content>
          <va-sidebar-item-title
            style="text-align: center; justify-content: space-around"
          >
            <va-icon name="payment" />
            Billing
          </va-sidebar-item-title>
        </va-sidebar-item-content>
      </va-sidebar-item>
    </div>
  </div>
</template>

<script lang="ts" script>
</script>

<style scoped>
.tabs {
  display: flex;
  justify-content: center;
}
.tab-item {
  border-radius: 10px;
  overflow: hidden;
  margin-top: 0.5em;
  width: 100%;
  margin: 1em 1em 1em 1em;
}
</style>