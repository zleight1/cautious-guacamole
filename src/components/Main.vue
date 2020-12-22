<template>
  <DynamicScroller
    :items="items"
    :min-item-size="54"
    class="scroller"
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
              {{ money(item.amount) }}
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
              {{ money(child.amount) }}
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
      return new Intl.NumberFormat().format(amount)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .scroller {
    height: 100%;
    .vue-recycle-scroller__item-wrapper :nth-child(even) .row {
      background: #EFEFEF;
    }
  }
  .row {
    display: flex;
    flex-wrap: wrap;
    cursor: pointer;
    padding: 10px 5px;
    border-bottom: 1px solid black;

    .children & {
      background: #FFFFFF!important;
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
