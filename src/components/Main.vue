<template>
  <DynamicScroller
    :items="items"
    :min-item-size="50"
    class="scroller"
    page-mode
  >
    <template v-slot="{ item, index, active }">
      <DynamicScrollerItem
        :item="item"
        :active="active"
        :size-dependencies="[
          item.children,
          item.expanded,
        ]"
        class="scroller__item"
        :data-index="index"
      >
        <div class="row" @click.stop.prevent="item.expanded = !item.expanded">
            <div class="row__cell">
              {{ item.expanded ? '-' : '+' }}
            </div>
            <div class="row__cell">
              {{ item.name }}
            </div>
            <div class="row__cell">
              {{ item.account }}
            </div>
            <div class="row__cell">
              <small>USD</small> {{ money(item.amount) }}
            </div>
        </div>
        <div v-if="item.expanded" class="children">
          <div class="row" v-for="child in item.children" :key="child.id">
            <div class="row__cell">
              >
            </div>
            <div class="row__cell">
              {{ child.name }}
            </div>
            <div class="row__cell">
              {{ child.account }}
            </div>
            <div class="row__cell">
              <small>USD</small> {{ money(child.amount) }}
            </div>
          </div>
        </div>
      </DynamicScrollerItem>
    </template>
  </DynamicScroller>
</template>

<script>
export default {
  name: 'Main',
  props: {
    items: Array
  },
  methods: {
    money(amount) {
      return new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(amount)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss">
  .scroller {
    height: 100%;
  }
  .children {
    max-height: 200px;
    overflow-y: auto;
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    padding: 10px 5px;
    border-top: 1px solid #000;
    border-collapse: collapse;
    background: #FFFFFF;

    .hover & {
      background: rgba(#00b3e0, 0.10);
    }

    .children & {
      background: #EFEFEF;
      border-top: 1px solid #CCC;
      &:hover {
        background: rgba(#00b3e0, 0.10);
      }
    }

    &__cell {
      padding: 5px;
      width: calc(95% / 3);
      text-align: center;
      &:first-child {
        width: calc(5%);
      }
    }
  }
</style>
