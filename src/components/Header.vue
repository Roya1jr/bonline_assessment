 <template>
  <va-navbar color="background">
    <template #left>
      <va-navbar-item>
        <div class="flex md6 lg1">
          <img src="../assets/Logo.png" alt="" />
        </div>
      </va-navbar-item>
    </template>

    <template #right>
      <va-navbar-item>Right</va-navbar-item>
    </template>
  </va-navbar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style>
.header_img {
  width: 10px;
  height: 10px;
}
</style>