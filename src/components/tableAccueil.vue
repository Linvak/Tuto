<template>
  <div> {{ marketData }} </div>
</template>

<script>
export default {
  // name: 'ComponentName',
  data () {
    return {
      marketData: null
    }
  },
  methods: {
    getMarket () {
      this.$axios.get('http://85.69.247.140:4435/markets')
        .then((response) => {
          console.log(response)
          this.marketData = response.data.markets[this.exchange]
        })
        .catch((error) => {
          console.log(error)
        })
    }
  },
  created () {
    this.getMarket()
  },
  watch: {
    exchange () {
      this.getMarket()
    }
  },
  props: {
    exchange: { default: 'gdax' }
  }
}
</script>

<style>
</style>
