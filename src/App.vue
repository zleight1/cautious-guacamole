<template>
<div id="app">
    <div class="row" style="background: #AAA">
      <div class="row__cell"></div>
      <div class="row__cell">
        <b>Payee</b>
      </div>
      <div class="row__cell">
        <b>Payment ID</b>
      </div>
      <div class="row__cell">
        <b>Amount</b>
      </div>
    </div>
  <div class="wrapper">
    <Main :items="items"></Main>
  </div>
</div>
</template>

<script>
import Main from './components/Main.vue'
import casual from 'casual-browserify'; // for generating fake data

const items = [];
const TOTAL_ITEMS = 500;
const MAX_CHILDREN = 10;

for (let index = 1; index < TOTAL_ITEMS; index++) {
  let item = {
    id: index,
    name: casual.company_name,
    account: casual.card_number(),
    amount: casual.integer(50, 100000),
    expanded: false,
    children: []
  }
  const childCount = casual.integer(2, MAX_CHILDREN)
  for (let y = 1; y < childCount; y++) {
    let child = {
      id: y,
      name: casual.company_name,
      account: casual.card_number(),
      amount: casual.double(0, 100000)
    }
    item.children.push(child);
  }

  items.push(item);
}

export default {
  name: 'App',
  components: {
    Main
  },
  data() {
    return {
     items
    }
  }
}
</script>

<style lang="scss">
*, *::before, *::after {
  box-sizing: border-box;
}
html {
  scroll-behavior: smooth;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.wrapper {
  max-height: 500px;
  overflow-y: auto;
}
</style>
