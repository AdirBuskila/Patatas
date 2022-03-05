<template>
    <div class="categories-grid">
      <div class="upper-row">
        <div class="box flex"></div>
        <Router-Link class="flex" to="/electronics">
          <div class="box electronics-products flex">
            <div class="category-name flex">
              <p>מוצרי חשמל לבית</p>
            </div>
          </div>
        </Router-Link>
        <Router-Link class="flex" to="/apple-phones">
          <div class="box apple-products flex">
            <div class="category-name flex">
              <p>Apple מוצרי</p>
            </div>
          </div>
        </Router-Link>
        <div class="box flex"></div>
      </div>
      <div class="lower-row">
        <Router-Link class="flex" to="/gaming">
          <div class="box gaming-products flex">
            <div class="category-name flex">
              <p>גיימינג</p>
            </div>
          </div>
        </Router-Link>
        <div class="box flex"></div>
        <Router-Link class="flex" to="/xiaomi-phones">
          <div class="box xiaomi-products flex">
            <div class="category-name flex">
              <p>Xiaomi מוצרי</p>
            </div>
          </div>
        </Router-Link>
        <Router-Link class="flex" to="/samsung-phones">
          <div class="box samsung-products flex">
            <div class="category-name flex">
              <p>Samsung מוצרי</p>
            </div>
          </div>
        </Router-Link>
      </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="">
    
</style>