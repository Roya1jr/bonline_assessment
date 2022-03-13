<template>
  <div class="side-bar">
    <va-sidebar
      color="b_white"
      minimizedWidth="1em"
      textColor="dark"
      width="15em"
    >
      <div class="side-group">
        <div class="side-item">
          <va-sidebar-item active-color="b_blue" active>
            <va-sidebar-item-content>
              <va-icon name="home" />
              <va-sidebar-item-title> Home </va-sidebar-item-title>
            </va-sidebar-item-content>
          </va-sidebar-item>
        </div>
        <div class="side-item">
          <va-sidebar-item active-color="b_blue">
            <va-sidebar-item-content>
              <va-icon name="payment" />
              <va-sidebar-item-title> Billing </va-sidebar-item-title>
            </va-sidebar-item-content>
          </va-sidebar-item>
        </div>
      </div>
    </va-sidebar>
  </div>
</template>


<script lang="ts" setup>
</script>


<style scoped>
.side-bar {
  height: 100vh;
  padding: 0em 1em 1em 1em;
  display: inline-block;
  border-right: 1px solid;
  border-color: var(--va-b_grey);
}

.side-item {
  border-radius: 10px;
  overflow: hidden;
  margin-top: 0.5em;
}

.side-group {
  margin-top: 1em;
}
</style>