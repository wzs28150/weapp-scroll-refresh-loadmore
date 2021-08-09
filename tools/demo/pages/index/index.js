// 获取应用实例

// import createRecycleContext from '../../components/index'
const app = getApp()
const createRecycleContext = require('../../components/index.js').default

// 提交wx.createRecycleContext能力

// console.log(createRecycleContext)
Page({
  pageNum: 1,
  listobj: Object,
  windowWidth: 0,
  data: {
    // placeholderImage: "data:image/svg+xml,%3Csvg height='140rpx' test='132rpx' width='100%25' xmlns='http://www.w3.org/2000/svg'%3E %3Crect width='50%25' x='40' height='20%25' style='fill:rgb(204,204,204);' /%3E %3C/svg%3E"
  },
  onLoad() {
    const than = this
    wx.getSystemInfo({
      success(res) {
        than.windowWidth = res.windowWidth
        than.listobj = createRecycleContext({
          id: 'recycleId',
          dataKey: 'recycleList',
          page: than,
          itemSize: than.itemSizeFunc,
        })

        than.getlist()
      }
    })
  },
  itemSizeFunc(item, idx) {
    const than = this
    return {
      width: than.windowWidth * 0.47,
      height: than.windowWidth * 0.61
    }
  },
  scrollToLower(e) {
    console.log('滚动到底部----')
    if (this.postflg) {
      this.postflg = false // 请求完成前不再更改页码请求接口
      this.pageNum++
      this.getlist()
    }
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
        console.log(res.data.code)
        if (res.data.code === 200) {
          // append  RecycleContext 对象提供的方法:在当前的长列表数据上追加list数据
          than.listobj.append(res.data.data.list)
          than.postflg = true
        }
      }
    })
  }
})
