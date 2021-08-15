// components/coolui-scroller-item/coolui-scroller-item.js
Component({
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
    navList: [
      {
        title: '设置'
      },
      {
        title: '设置'
      }
    ]
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
    heightChange() {
    }
  }
})
