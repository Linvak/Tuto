<template>
  <q-page class="flex flex-center">
    <tableAccueil @click.native="exchangeName = 'binance'" :exchange='exchangeName' />
  </q-page>
</template>

<style>
</style>

<script>
import tableAccueil from '../components/tableAccueil'
export default {
  name: 'PageIndex',
  data () {
    return {
      exchangeName: 'poloniex'
    }
  },
  components: { tableAccueil }
}
</script>
