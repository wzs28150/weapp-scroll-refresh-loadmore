// components/coolui-scroller-item/coolui-scroller-item.js
Component({
  options: {
    addGlobalClass: true // 允许外部修改样式
  },
  relations: {
    './coolui-scroller': {
      type: 'parent' // 关联的目标节点应为子节点
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    noMoreTextStyle: {
      type: String,
      value: ''
    },
    status: {
      type: String,
      value: 'more'
    },
    loadingText: {
      type: String,
      value: '\u52A0\u8F7D\u4E2D'
    },
    moreText: {
      type: String,
      value: '\u67E5\u770B\u66F4\u591A'
    },
    noMoreText: {
      type: String,
      value: '\u6CA1\u6709\u66F4\u591A'
    },
    color: {
      type: String,
      value: '#6190e8'
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
  methods: {}
})
