<template>
  <section class="menu-nav flex column align-center">
      <div class="heading flex">
      <h1>תפריט מלא</h1>
      </div>
        <div
        v-for="option in navArray" :key="option.value"
        :class="optionClass(option.value)"
        @click="setFilterBy(option)"
        >
            <p>{{option.name}}</p>
        </div>
  </section>
</template>

<script>
export default {
    props:{
        filterBy: Object
    },
    data(){
        return{
            navArray: [
                {name: 'פאטאטאס', value: 'main'},
                {name: 'מרקים', value: 'soup'},
                {name: 'ספיישלים', value: 'special'},
                {name: 'קינוחים', value: 'desert'},
                {name: 'שתייה קלה', value: 'drink'},
            ]
        }
    },
    methods:{
        optionClass(value) {
            return value === this.filterBy.value ? 'menu-option pointer flex active' : 'menu-option pointer flex'
        },
        setFilterBy(value) {
            this.$emit('set-filter-by', value)
        }
    }
}
</script>

<style>

</style>