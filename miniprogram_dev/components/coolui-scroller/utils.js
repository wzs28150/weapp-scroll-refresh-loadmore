function setHeight() {
  const that = this
  const wholePageIndex = this.wholePageIndex
  this.query = wx.createSelectorQuery()
  this.query.select(`#wrp_${wholePageIndex}`).boundingClientRect()
  this.query.exec(function (res) {
    that.pageHeightArr[wholePageIndex] = res[0] && res[0].height
  })
  this.observePage(wholePageIndex)
}

function observePage(pageIndex) {
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
}

module.exports.setHeight = setHeight
module.exports.observePage = observePage
