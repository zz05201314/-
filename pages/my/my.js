// pages/my/my.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
// 扫码
saoFn() {
  // 允许从相机和相册扫码
  wx.scanCode({
    success (res) {
      console.log('扫码结果，微信自动识别出二维码内容返回给你 你判断',res)
    }
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function (res) {
    console.log('你转发了')
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    } 
    return {
      title: '自定义转发标题',
      path: '/page/user?id=123'
    }
  }
})