<template>
  <div>
    <div class="">
      <Header/>
      <Currency/>
  </div>
  </div>
</template>
<script>
import Header from './Header'
import Currency from './Currency'
import SideDrawer from '../components/common/SideDrawer'
export default {
  components: {
    Header,
    SideDrawer,
    Currency
  }
}
</script>
