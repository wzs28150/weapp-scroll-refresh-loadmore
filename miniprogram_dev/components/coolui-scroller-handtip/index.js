Component({
  relations: {
    './coolui-scroller': {
      type: 'parent', // 关联的目标节点应为子节点
      linked() {}
    }
  },
  properties: {
    top: {
      type: String,
      value: 0
    },
    bottom: {
      type: String,
      value: 0
    },
    left: {
      type: String,
      value: 0
    },
    right: {
      type: String,
      value: 0
    },
    key: {
      type: String,
      value: null
    },
    opacity: {
      type: Number,
      value: 0.5
    }
  },
  data: {
    isTipShow: false
  },
  methods: {
    close: function () {
      try {
        wx.setStorageSync(this.data.key, 'true')
        this.setData({
          isTipShow: true
        })
      } catch (e) {}
    }
  },
  ready() {
    try {
      var isKey = wx.getStorageSync(this.data.key)
      console.log(isKey);
      if (isKey) {
        console.log(isKey);
        this.setData({
          isTipShow: true
        })
      }
    } catch (e) {}
  }
})