<template>
<div class="form-container flex">
  <form class="payment-form">
    <div class="info">
      <div class="heading-container">
        <h1>פרטיים אישיים</h1>
      </div>
      <div class="input-stack">
        <div class="input-container flex column">
          <label for="fname" class="input-title">
            שם פרטי
          </label>
          <input required type="text" id="fname" name="fname" />
        </div>
        <div class="input-container flex column">
          <label for="lname" class="input-title">
            שם משפחה
          </label>
          <input required type="text" id="lname" name="lname"/>
        </div>
        <div class="input-container flex column">
          <label for="phone" class="input-title">
            טלפון
          </label>
          <input required type="tel" id="phone" name="phone" />
        </div>
        <div class="input-container flex column">
          <label for="email" class="input-title">
            דוא״ל
          </label>
          <input type="email" id="email" name="email" />
        </div>
      </div>
    </div>
        <div class="address">
      <div class="heading-container">
        <h1>כתובת</h1>
      </div>
      <div class="input-stack">
        <div class="input-container flex column">
          <label class="input-title">
            אזור משלוח
          </label>
          <input/>
        </div>
        <div class="input-container flex column">
          <label for="street" class="input-title">
            רחוב
          </label>
          <input required type="text" id="street" name="street"  />
        </div>
        <div class="input-container flex column">
          <label for="street-num" class="input-title">
            מספר
          </label>
          <input required type="text" id="street-num" name="street-num"  />
        </div>
        <div class="input-container flex column">
          <label for="office" class="input-title">
            דירה/משרד
          </label>
          <input type="text" id="office" name="office" />
        </div>
        <div class="input-container flex column">
          <label for="entrance" class="input-title">
            כניסה
          </label>
          <input type="text" id="entrance" name="entrance" />
        </div>
        <div class="input-container flex column">
          <label for="floor" class="input-title">
            קומה
          </label>
          <input type="text" id="floor" name="floor" />
        </div>
        <div class="input-container flex column">
          <label for="serve-amount" class="input-title">
            סועדים
          </label>
          <input type="number" id="serve-amount" name="serve-amount" />
        </div>
        <div class="input-container flex column">
          <label class="input-title">
            סכו''ם
          </label>
          <input />
        </div>
        <div class="input-container flex column">
          <label for="note" class="input-title">
            הערות
          </label>
          <input type="text" id="note" name="note" />
        </div>
      </div>
    </div>
    <hr/>
    <div class="payment">
      <div class="heading-container">
      </div>
      <div class="input-stack">
        <div class="input-container flex column">
          <label for="pay-amount" class="input-title">
            סכום לתשלום
          </label>
          <input type="text" inputmode="numeric" id="pay-amount" name="pay-amount" :value="cartTotal" />
        </div>
        <div class="input-container flex column">
          <label for="payment_cc_fname" class="input-title">
            שם פרטי
          </label>
          <input type="text" id="payment_cc_fname" name="payment_cc_fname"  />
        </div>
        <div class="input-container flex column">
          <label for="payment_cc_lname" class="input-title">
            שם משפחה
          </label>
          <input type="text" id="payment_cc_lname" name="payment_cc_lname" />
        </div>
        <div class="input-container flex column">
          <label for="payment_cc_id" class="input-title">
            מספר ת''ז
          </label>
          <input type="text" id="payment_cc_id" name="payment_cc_id" />
        </div>
        <div class="input-container flex column">
          <label for="payment_cc_phone" class="input-title">
            מספר טלפון
          </label>
          <input type="text" id="payment_cc_phone" name="payment_cc_phone" />
        </div>
        <div class="input-container flex column">
          <label for="cc_num" class="input-title">
            מספר כרטיס
          </label>
          <input type="text" id="cc_num" name="cc_num" inputmode="numeric" autocomplete="cc-number" placeholder="XXXX XXXX XXXX XXXX" />
        </div>
        <div class="input-container flex column">
          <label for="date-field" class="input-title">
            תוקף
          </label>
          <input type="text" id="date-field" name="date-field" inputmode="numeric" autocomplete="cc-exp" placeholder="MM / YY" />
        </div>
        <div class="input-container flex column">
          <label for="cvc-field" class="input-title">
            3 ספרות
          </label>
          <input type="text" id="cvc-field" name="cvc-field" inputmode="numeric" autocomplete="cc-csc" placeholder="XXX" />
        </div>
      </div>
    </div>
  </form>
</div>

</template>

<script>
export default {
  computed:{
    cartTotal(){
      return this.$store.getters.cartTotal
    }
  }

};
</script>

<style></style>
