<template>
  <va-sidebar-item-content>
    <va-card>
      <va-card-title>
        <div class="display-6">Payment Details</div>
      </va-card-title>
      <va-card-content>
        View details of your next invoice and payment method
        <va-divider />
        <div class="title">Next invoice: {{ invoice }}</div>
        <div class="info">
          <div class="pay-details">
            <div class="title">Current balance</div>
            <div class="display-4">£{{ balance }}</div>
            <div class="pay-text">
              <va-icon name="lock" /> This is a secure 256-bit SSL <br />
              encrypted payment. You're safe
            </div>
            <div class="btn-bottom">
              <va-button :rounded="false" class="mr-4" color="b_blue">
                Pay Now
              </va-button>
            </div>
          </div>

          <div class="pay-details">
            <div class="title">Payment Method: {{ paymentMethod }}</div>
            <div class="pay-text">
              <va-icon name="lightbulb" color="primary" />
              <span class="cl-text">Guide:</span> To manage your payments
              <br />
              more easily, we recommend switching <br />to Direct Debit
            </div>
            <div></div>
            <div class="btn-bottom">
              <va-button :rounded="false" class="mr-4" color="b_blue">
                Switch to Direct Debit
              </va-button>
            </div>
          </div>
        </div>
      </va-card-content>
    </va-card>
  </va-sidebar-item-content>
</template>

<script lang="ts" setup>
const payymentprops = defineProps({
  invoice: String,
  paymentMethod: String,
  balance: Number,
});
</script>

<style>
.info {
  margin-top: 2em;
  margin-left: 1em;
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 0.5em;
}

.pay-details {
  display: grid;
  grid-template-rows: 1fr 2fr 1fr 1.5fr;
  position: relative;
}

.pay-text {
  text-align: start;
}
.cl-text {
  color: var(--va-primary);
}
.btn-bottom {
  padding-top: 20em;
  position: absolute;
  bottom: 0;
}
</style>