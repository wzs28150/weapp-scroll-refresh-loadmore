// 获取应用实例

// import createRecycleContext from '../../components/index'
const app = getApp()
const createRecycleContext = require('../../components/index.js').default

// 提交wx.createRecycleContext能力

// console.log(createRecycleContext)
Page({
  pageNum: 1,
  ctx: Object,
  windowWidth: 0,
  data: {
    triggered: true
  },
  onShow() {
    const than = this
    wx.getSystemInfo({
      success(res) {
        than.windowWidth = res.windowWidth
        than.getlist()
      }
    })
  },
  scrollToLower(e) {
    console.log('滚动到底部----')
    if (this.postflg) {
      this.postflg = false // 请求完成前不再更改页码请求接口
      this.pageNum++
      this.getlist()
    }
  },
  scrollToupper(e) {
    const than = this
    console.log(than.ctx)

    than.ctx.splice(0, than.ctx.getList().length)
    than.ctx.destroy()
    than.ctx = null
    than.pageNum = 1
    than.getlist()
    // setTimeout(() => {
    //   than.setData({
    //     triggered: false
    //   })
    // }, 500)
  },
  getlist() {
    const than = this
    wx.request({
      url: 'http://82.157.27.90:9099/mock/28/index/list',
      data: {
        page: than.pageNum,
        pagenum: 10,
      },
      method: 'get',
      success(res) {
        if (res.data.code === 200) {
          // append  RecycleContext 对象提供的方法:在当前的长列表数据上追加list数据

          than.ctx = createRecycleContext({
            id: 'recycleId',
            dataKey: 'recycleList',
            page: than,
            itemSize: {
              width: than.windowWidth,
              height: 1
            },
          })
          // 由于接口模拟数据不能自增全部id,处理id
          const list = res.data.data.list
          for (let i = 0; i < list.length; i++) {
            list[i].id = 3 * (than.pageNum - 1) + i
          }
          than.ctx.append(res.data.data.list, function () {
            wx.createSelectorQuery()
              .select('.scroller-item')
              .boundingClientRect(function (rectItem) {
                // console.log(rectItem.height)
                than.ctx.itemSize = {
                  width: than.windowWidth,
                  height: rectItem.height
                }
              })
              .exec()
          })
          // console.log(than.ctx.getBoundingClientRect(1))
          than.postflg = true
          setTimeout(() => {
            than.setData({
              triggered: false
            })
          }, 500)
        }
      }
    })
  }
})
