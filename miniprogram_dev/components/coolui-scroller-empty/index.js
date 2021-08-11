Component({
  relations: {
    './coolui-scroller': {
      type: 'parent',
      linked() {}
    }
  },
  externalClasses: ['img-class', 'text-class'],
  properties: {
    emptyImg: {
      type: String,
      value: ''
    },
    emptyText: {
      type: String,
      value: '暂无内容'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },
  /**
   * 组件的方法列表
   */
  methods: {

  }
})