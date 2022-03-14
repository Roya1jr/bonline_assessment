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

      <div class="accounts" v-for="(product, index) in products" :key="index">
        <AccountCard
          :service="product.product_kind"
          :status="account"
          :accountId="accId"
        />
      </div>

      <div class="details">
        <div class="payment">
          <PaymentDetails
            :invoice="invoice"
            :paymentMethod="pmethod"
            :balance="balance"
          />
        </div>
        <div class="products">
          <va-sidebar-item-content>
            <va-card>
              <va-card-title>
                <div class="display-6">My products</div>
              </va-card-title>
              <va-card-content>
                All your products at a glance
                <va-divider />
                <div v-for="(product, index) in products" :key="index">
                  <ProductDetails
                    :kind="product.product_kind"
                    :pId="product.product_id"
                  />
                </div>
              </va-card-content>
            </va-card>
          </va-sidebar-item-content>
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

import { dataStore } from "@/store/index";
import { storeToRefs } from "pinia";

const main = dataStore();
const { currentUser } = storeToRefs(main);

const products = main.currentUser.products;
const account = main.currentUser.account_status;
const accId = main.currentUser.account_id;
const invoice = main.currentUser.next_invoice_date;
const balance = main.currentUser.balance;
const pmethod = main.currentUser.payment_method;
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