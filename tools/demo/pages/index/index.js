// 获取应用实例

// import createRecycleContext from '../../components/index'
// const app = getApp()


// 提交wx.createRecycleContext能力
// const a = new createRecycleContext()
// console.log(a)
Page({
  data: {
    isEmpty: false,
    list: []
  },
  onLoad: function name() {

  },
  onShow() {
    this.scroller = this.selectComponent('#scroller')
    this.wholePageIndex = 0
    this.wholeVideoList = []
    this.currentRenderIndex = 0
    this.index = 0
    this.pageHeightArr = []
    wx.getSystemInfo({
      success: (res) => {
        const {
          windowHeight
        } = res
        this.windowHeight = windowHeight
      }
    })
    this.getList()
  },
  setHeight() {
    const that = this
    const wholePageIndex = this.wholePageIndex
    this.query = wx.createSelectorQuery()
    // console.log(this.query.select(`#wrp_${wholePageIndex}`))
    this.query.select(`#wrp_${wholePageIndex}`).boundingClientRect()
    this.query.exec(function (res) {
      that.pageHeightArr[wholePageIndex] = res[0] && res[0].height
    })
    this.observePage(wholePageIndex)
  },
  observePage(pageIndex) {
    const that = this
    const observerObj = wx.createIntersectionObserver(this).relativeToViewport({
      top: 2 * this.windowHeight,
      bottom: 2 * this.windowHeight
    })
    observerObj.observe(`#wrp_${pageIndex}`, (res) => {
      if (res.intersectionRatio <= 0) {
        that.setData({
          ['list[' + pageIndex + ']']: {
            height: that.pageHeightArr[pageIndex]
          },
        })
      } else {
        that.setData({
          ['list[' + pageIndex + ']']: that.wholeVideoList[pageIndex],
        })
      }
    })
  },
  getList() {
    const wholePageIndex = this.wholePageIndex
    this.currentRenderIndex = wholePageIndex
    const than = this
    wx.request({
      url: 'http://82.157.27.90:9099/mock/28/index/list',
      data: {
        page: wholePageIndex,
        pagenum: 10,
      },
      method: 'get',
      success(res) {
        if (res.data.code === 200) {
          // than.scroller.getData(res.data.data.list)
          if (res.data.data.list.length === 0 && wholePageIndex === 0) {
            than.setData({
              isEmpty: true
            })
          } else {
            than.wholeVideoList[wholePageIndex] = res.data.data.list
            const datas = {}
            datas['list[' + wholePageIndex + ']'] = res.data.data.list
            // console.log(res.data.data.list)
            than.setData(datas, () => {
              console.log(than.data)
              than.setHeight()
              than.wholePageIndex += 1
            })
          }
        }
      }
    })
  },
  refresh() {
    console.log(1)
  }
})
