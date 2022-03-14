<template>
  <va-sidebar-item-content>
    <va-card>
      <va-card-title>
        <div class="display-6">
          {{ accountprops.service }}
          <va-chip size="small">{{ accountprops.status }}</va-chip>
        </div>
      </va-card-title>
      <va-card-content
        >Account ID : {{ accountprops.accountId }}</va-card-content
      >
    </va-card>
  </va-sidebar-item-content>
</template>

<script lang="ts" setup>
const accountprops = defineProps({
  service: String,
  status: String,
  accountId: Number,
});
</script>

<style>
</style>