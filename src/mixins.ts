// 生命周期钩子事件发射
const lifeMethods = ['beforeCreate', 'created', 'beforeMount', 'mounted', 'beforeUpdate', 'updated', 'beforeDestroy', 'destroyed']
const lifeMixins = {}
lifeMethods.forEach(method => {
  // 把传入的配置和数据传出
  lifeMixins[method] = function () {
    this.$emit(method);
  }
})

// props基本入参
const propsMixins = {
  props: {
    /**
     * 当组件数据源为对象时，请使用data字段
     */
    data: {
      type: Object,
      default: () => ({})
    },
    /**
     * 当组件数据源为数组时，请使用list字段
     */
    list: {
      type: Array,
      default: () => ([])
    },
    /**
     * 组件配置信息请通过config对象传入
     */
    config: {
      type: Object,
      default: () => ({})
    }
  },
}

export default {
  ...propsMixins,
  ...lifeMixins
}