// components/coolui-scroller-item/coolui-scroller-item.js
Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    addGlobalClass: true // 允许外部修改样式
  },
  relations: {
    './coolui-scroller': {
      type: 'parent', // 关联的目标节点应为子节点
      linked() {}
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    pageList: {
      type: Array,
      value: []
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    // height: 100
  },
  /**
   * 组件的方法列表
   */
  methods: {

  },
  ready(){
    // console.log(this.data.pageList);
  }
})
