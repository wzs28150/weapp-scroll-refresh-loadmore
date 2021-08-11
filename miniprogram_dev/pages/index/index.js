// 获取应用实例
const utils = require('../../components/index.js')

Page({
  data: {
    isEmpty: false,
    list: [],
    loadMoreSetting: {
      status: 'more',
      moreText: '上拉加载更多',
      loadingText: '加载中...',
      noMoreText: '-- 到底啦 --',
      color: '#999'
    },
    emptySetting: {
      // img: '../../img/empty.png',
      img: 'http://www.365editor.com/images/nodata.png',
      text: '暂无文章'
    }
  },

  onShow() {
    // 设置分页
    this.wholePageIndex = 0
    // 设置缓存全部数据
    this.wholeList = []
    // 设置当前渲染第几页
    this.currentRenderIndex = 0
    // 设置缓存每一页页面高度
    this.pageHeightArr = []
    // 设置总页数
    this.totalPageNum = 0
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
  getList() {
    const than = this
    const loadMoreSetting = than.data.loadMoreSetting
    // 判断当前是否为加载状态 防止页面重复添加数据
    if (loadMoreSetting.status !== 'loading') {
      loadMoreSetting.status = 'loading'
      than.setData({
        loadMoreSetting
      })
      const wholePageIndex = this.wholePageIndex
      this.currentRenderIndex = wholePageIndex
      if (than.totalPageNum > 0 && wholePageIndex == than.totalPageNum) {
        const loadMoreSetting = than.data.loadMoreSetting
        loadMoreSetting.status = 'noMore'
        than.setData({
          loadMoreSetting
        })
      } else {
        //  获取远程数据可换成自己封装的请求方法
        wx.request({
          url: 'http://82.157.27.90:9099/mock/28/index/list',
          data: {
            page: wholePageIndex + 1,
            isempty: 0, // 设置为1可测试空数据
            pagenum: 10,
          },
          method: 'get',
          success(res) {
            if (res.data.code === 200) {
              // than.scroller.getData(res.data.data.list)
              // console.log(res.data.data.last)
              // console.log(wholePageIndex)
              than.totalPageNum = res.data.data.last
              if (res.data.data.list.length === 0 && wholePageIndex === 0) {
                const loadMoreSetting = than.data.loadMoreSetting
                loadMoreSetting.status = 'noMore'
                than.setData({
                  isEmpty: true,
                  loadMoreSetting
                })
              } else {
                than.wholeList[wholePageIndex] = res.data.data.list
                const datas = {}
                datas['list[' + wholePageIndex + ']'] = res.data.data.list
                setTimeout(() => {
                  than.setData(datas, () => {
                    utils.setHeight(than)
                    const loadMoreSetting = than.data.loadMoreSetting
                    loadMoreSetting.status = 'more'
                    than.setData({
                      loadMoreSetting
                    })
                    than.wholePageIndex += 1
                  })
                }, 500)
              }
            }
          }
        })
      }
    }
  },
  refresh() {
    // 初始化缓存数据
    const that = this
    this.wholePageIndex = 0
    this.wholeList = []
    this.currentRenderIndex = 0
    this.pageHeightArr = []
    that.setData({
      list: [],
    })
    // 重新拉取数据
    that.getList()
  }
})
