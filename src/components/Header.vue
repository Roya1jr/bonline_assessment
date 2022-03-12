 <template>
  <div class="nav">
    <va-app-bar color="b_white">
      <div class="img-box"><img src="../assets/Logo.png" alt="" /></div>
      <div class="right">
        <va-badge overlap dot color="b_blue">
          <va-button-dropdown
            class="material-icons-outlined"
            size="large"
            flat
            color="b_blue"
            icon="notifications"
          >
            Content
          </va-button-dropdown>
        </va-badge>
        <div class="vl"></div>
        <div class="profile">
          <va-avatar src="https://randomuser.me/api/portraits/women/5.jpg" />
          <va-list-item-label>
            <h6 class="display-6">Jane Doe</h6>
            <h7 class="display-8">fake@email.com</h7>
          </va-list-item-label>
        </div>

        <va-button-dropdown flat class="ml-2" color="b_blue">
          content
        </va-button-dropdown>
      </div>
    </va-app-bar>
  </div>
</template>


<script lang="ts" setup>
</script>

<style scoped>
img {
  margin-right: -5em;
  width: 100%;
}

.nav {
  display: flex;
  max-height: 4em;
  border-bottom: 1px solid #394455;
  overflow: hidden;
  margin-bottom: 0.5em;
}

.vl {
  border-left: 2px dotted #394455;
  margin-left: 2em;
  margin-right: 2em;
}

.right {
  display: flex;
  margin-right: 3em;
  margin-left: 70%;
}
.profile {
  display: flex;
  margin-right: 2em;
  justify-content: space-between;
}
</style>