<template>
  <div class="branch-info flex column justify-center align-center">
    <div class="address flex justify-center">
      <p>
        פאטאטאס סוקולוב 58, חולון |
        <a href="tel:037734655">03-773-4655</a>
      </p>
      <a class="svg-anchor" href="tel:037734655">
        <div class="svg-container flex align-center justify-center">
          <PhoneFilled />
        </div>
      </a>
    </div>

    <p class="open-hours">
      בהשגחת רבנות חולון | שעות משלוח: א-ד: 11:10-00:50, ה: 11:10-01:30, ו:
      סגור, ש: 20:40-00:59
    </p>
  </div>
</template>

<script>
import { PhoneFilled } from '@element-plus/icons-vue';
export default {
    components:{
        PhoneFilled,
    }
};
</script>

<style></style>
