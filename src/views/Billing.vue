<template>
  <div class="grid-container">
    <div class="side-bar">
      <component :is="true ? SideBar : Tabs" />
    </div>
    <div class="content">
      <div class="title-text">
        <div class="display-2">Billing</div>
        <br />
        <div>Overview of your accounts</div>
        <va-divider />
      </div>

      <div class="accounts">
        <AccountCard />
        <AccountCard />
      </div>

      <div class="details">
        <div class="payment">
          <PaymentDetails />
        </div>
        <div class="products">
          <ProductDetails />
        </div>
      </div>

      <div class="billing-history">
        <BillingHistory />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SideBar from "@/components/SideBar.vue";
import Tabs from "@/components/Tabs.vue";
import AccountCard from "@/components/AccountCard.vue";
import PaymentDetails from "@/components/PaymentDetails.vue";
import ProductDetails from "@/components/ProductDetails.vue";
import BillingHistory from "@/components/BillingHistory.vue";

let width: number = window.innerWidth;
let height: number = window.innerHeight;

function reportWindow() {
  width = window.innerWidth;
  height = window.innerHeight;
  console.log("resize");
}

window.addEventListener("resize", reportWindow);
</script>

<style scoped>
* {
  font-family: "Poppins", Arial sans-serif;
}
.grid-container {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
}

.content {
  display: grid;
  grid-template-rows: 1fr 2fr 4fr 4fr;
  width: 100%;
  border-left: 1px solid;
  border-color: var(--va-b_grey);
  row-gap: 1px;
}
.title-text {
  color: var(--va-b_black);
  margin-top: 1em;
  margin-left: 2em;
}
.accounts {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  background-color: var(--va-b_offwhite);
  border-bottom: 1px black solid;
  border-bottom-color: var(--va-b_grey);
}
.details {
  display: grid;
  grid-template-columns: 3fr 2fr;
  background-color: var(--va-b_offwhite);
}
</style>