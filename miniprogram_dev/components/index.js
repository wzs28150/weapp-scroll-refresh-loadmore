/**
 * coolui-scroller组件的api使用
 * 提供wx.createScrollContext进行管理功能
 */
function observePage(pageIndex, that) {
  const observerObj = wx.createIntersectionObserver(that).relativeToViewport({
    top: 2 * that.windowHeight,
    bottom: 2 * that.windowHeight
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
        ['list[' + pageIndex + ']']: that.wholeList[pageIndex],
      })
    }
  })
}

function setHeight(that) {
  const wholePageIndex = that.wholePageIndex
  this.query = wx.createSelectorQuery()
  this.query.select(`#wrp_${wholePageIndex}`).boundingClientRect()
  this.query.exec(function (res) {
    that.pageHeightArr[wholePageIndex] = res[0] && res[0].height
  })
  observePage(wholePageIndex, that)
}

module.exports.setHeight = setHeight
