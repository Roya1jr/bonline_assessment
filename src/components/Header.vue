 <template>
  <va-navbar color="background">
    <template #left>
      <img src="../assets/Logo.png" alt="" />
    </template>
    <template #right>
      <va-navbar-item>Right</va-navbar-item>
    </template>
  </va-navbar>
  <va-divider />
</template>


<script>
export default {
  name: "Header",
};
</script>

<style scoped>
img {
  width: 60%;
  height: 100%;
}
</style>