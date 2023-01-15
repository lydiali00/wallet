<template>
  <w3m-core-button></w3m-core-button>
  <router-view/>
  <web3Modal />
</template>
<script>
import web3Modal from './HtmlWallet'
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
    web3Modal
  }
})

</script>
