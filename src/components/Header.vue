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
          <div class="labels">
            <va-list-item-section>
              <va-list-item-label>
                <h1 class="display-6">{{ name }}</h1>
              </va-list-item-label>
              <va-list-item-label caption>
                <h1 class="display-8">{{ email }}</h1>
              </va-list-item-label>
            </va-list-item-section>
          </div>
        </div>
        <va-button-dropdown flat class="ml-2" color="b_blue">
          <ul v-for="(user, index) in users" :key="index">
            <li>
              <va-chip size="small"> {{ user.email_address }} </va-chip>
            </li>
          </ul>
        </va-button-dropdown>
      </div>
    </va-app-bar>
  </div>
</template>


<script lang="ts" setup>
import { dataStore } from "@/store/index";
import { storeToRefs } from "pinia";
import { ref } from "vue";

const main = dataStore();
const { currentUser } = storeToRefs(main);

let name: string =
  main.currentUser.first_name + " " + main.currentUser.last_name;
let email = main.currentUser.email_address;
let users = main.getData();
</script>

<style scoped>
img {
  margin-right: -5em;
  width: 100%;
}
ul {
  padding: 0.5em;
}
.nav {
  display: flex;
  flex-direction: row;
  overflow: hidden;
  min-width: 100%;
  max-height: 4.5em;
  border-bottom: 1px solid;
  border-color: var(--va-b_grey);
}

.vl {
  border-left: 2px dotted;
  border-color: var(--va-b_grey);
  margin-left: 2em;
  margin-right: 2em;
}

.right {
  width: -90%;
  display: flex;
  margin-right: 3em;
  margin-left: auto;
  margin-top: 0.5em;
  margin-bottom: 0.5em;
}

.profile {
  display: flex;
  margin-right: 2em;
  justify-content: space-between;
}
.labels {
  margin-left: 0.5em;
}
</style>