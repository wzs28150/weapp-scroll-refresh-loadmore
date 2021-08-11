Component({
  options: {
    multipleSlots: true, // 在组件定义时的选项中启用多slot支持
    addGlobalClass: true // 允许外部修改样式
  },
  relations: {
    '../coolui-scroller-item/coolui-scroller-item': {
      type: 'child'
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
    timeout: null,
    isBackToTopShow: false
  },

  ready() {
    this.setWapHeight()
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setWapHeight() {
      const that = this
      const query = that.createSelectorQuery().in(this)
      query.select('#content').boundingClientRect(function (res) {
        that.setData({
          contentHeight: res.height
        })
      }).select('#header').boundingClientRect(function (headerRes) {
        that.setData({
          contentHeight: that.data.contentHeight - headerRes.height
        })
      }).exec()
    },
    debounce(fn, wait) {
      // this.timeout = null
      // return false
      const that = this
      that.setData({
        timeout: null
      })
      return function () {
        if (that.data.timeout !== null) {
          clearTimeout(that.data.timeout)
        }

        const timeout = setTimeout(() => {
          fn()
        }, wait)
        that.setData({
          timeout
        })
      }
    },
    onLoadmore() {
      const that = this
      // setTimeout(() => {
      //   this.triggerEvent('loadmore')
      // }, 500)
      this.debounce(function () {
        that.triggerEvent('loadmore')
      }, 500)()
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
      this.triggerEvent('refresh')
    },
    scroll(e) {
      if (e.detail.scrollTop > 100 && this.data.isBackToTopShow == false) {
        this.setData({
          isBackToTopShow: true
        })
      } else if (e.detail.scrollTop <= 100 && this.data.isBackToTopShow == true) {
        this.setData({
          isBackToTopShow: false
        })
      }
    },
    backToTop() {
      this.triggerEvent('refresh')
    }
  }
})