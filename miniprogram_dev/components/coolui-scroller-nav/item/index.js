// components/coolui-scroller-nav/item/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    overlayHeight: 0,
    isOverLayShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    setOverlayHeight() {
      const that = this
      wx.getSystemInfo({
        success: (sysRes) => {
          const {
            windowHeight
          } = sysRes
          const query = wx.createSelectorQuery().in(this)
          query.select(`.overlay`).boundingClientRect()
          query.exec(function (res) {
            console.log(res);
            that.setData({
              overlayHeight: windowHeight - res[0].top
            })
          })
        }
      })

    },
    toggel(){
      this.setData({
        isOverLayShow: !this.data.isOverLayShow
      })
    }
  },
  ready() {
    this.setOverlayHeight()
  }
})