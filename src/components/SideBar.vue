<template>
  <div style="height: 100%; background: b_blue; padding: 0em 1em 1em 1em">
    <va-sidebar color="b_white" minimizedWidth="1em" textColor="dark">
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
    </va-sidebar>
  </div>
</template>


<script lang="ts" setup>
</script>


<style scoped>
.side-item {
  border-radius: 10px;
  overflow: hidden;
}
</style>