// components/coolui-scroller-nav/item/index.js
Component({
  relations: {
    '../index/index': {
      type: 'parent',
      linked: function (target) {
        // console.log(target);
      },
    }
  },
  properties: {
    title: {
      type: String
    },
    value: {
      type: String
    },
    options: {
      type: Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isDropdownShow: false,
    overlayDuration: 0,
    dropAnimation: {}
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toggel() {
      var nodes = this.getRelationNodes('../index/index')
      this.setData({
        overlayDuration: nodes[0].data.overlayDuration
      })
      nodes[0].toggel(this.data.value)
    },
    toggelDropdown(active) {
      const that = this
      if (active === this.data.value) {
        if (this.data.isDropdownShow === false) {
          this.setData({
            isDropdownShow: true,
          })
        } else {
          this.setData({
            isDropdownShow: false,
          })
        }
      } else {
        this.setData({
          isDropdownShow: false,
        })
      }
    }

  },
  ready() {

  }
})