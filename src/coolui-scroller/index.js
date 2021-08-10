Component({
  options: {
    multipleSlots: true // 在组件定义时的选项中启用多slot支持
  },
  relations: {
    '../coolui-scroller-item/coolui-scroller-item': {
      type: 'child', // 关联的目标节点应为子节点
      linked(target) {
        // 检查第一个的尺寸就好了吧
        if (!this._hasCheckSize) {
          this._hasCheckSize = true
          const size = this.boundingClientRect(this._pos.beginIndex)
          if (!size) {
            return
          }
          setTimeout(() => {
            try {
              target.createSelectorQuery().select('.wx-coolui-scroller-item').boundingClientRect((rect) => {
                if (rect && (rect.width !== size.width || rect.height !== size.height)) {
                  // eslint-disable-next-line no-console
                  console.warn('[coolui-scroller] the size in <coolui-scroller-item> is not the same with param ' +
                    `itemSize, expect {width: ${rect.width}, height: ${rect.height}} but got ` +
                    `{width: ${size.width}, height: ${size.height}}`)
                }
              }).exec()
            } catch (e) {
              // do nothing
            }
          }, 10)
        }
      }
    }
  },
  /**
   * 组件的属性列表
   */
  properties: {
    isEmpty: {
      type: Boolean,
      value: false
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    contentHeight: 0,
    triggered: false,
  },

  ready() {
    this.setWapHeight()

    // this.triggerEvent('getData')
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setWapHeight() {
      const that = this
      const query = wx.createSelectorQuery().in(this)
      query.select('#content').boundingClientRect(function (res) {
        query.select('.slot-header').boundingClientRect(function (headerRes) {
          if (that.data.contentHeight === 0) {
            that.setData({
              contentHeight: res.height - headerRes.height
            })
          }
        }).exec()
      }).exec()
    },
    _loadmore() {
      setTimeout(() => {
        this.triggerEvent('loadmore')
      }, 500)
    },
    onRefresh() {
      setTimeout(() => {
        // this.triggerEvent('refresh')
        this.setData({
          triggered: false
        })
      }, 1000)
    },
    onPulling() {

    },
    onRestore() {

    },
    scroll() {

    }
  }
})
