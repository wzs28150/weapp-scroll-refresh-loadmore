/**
 * coolui-scroller组件的api使用
 * 提供wx.createScrollContext进行管理功能
 */
import ScrollContext from './utils/scroller-context'

/**
 * @params options参数是object对象，展开的结构如下
      id: coolui-scroller的id
      dataKey: coolui-scroller-item的wx:for绑定的数据变量
      page: coolui-scroller所在的页面或组件的实例
      itemSize: 函数或者是Object对象，生成每个coolui-scroller-item的宽和高
 * @return ScrollContext对象
 */
export default function (options) {
  return new ScrollContext(options)
}
