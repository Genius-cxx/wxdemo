// bookstore/more/more.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
      name:'',
      bookMessage:[],
      content:''
  },
  chose(e){
    this.setData({
      content: e.currentTarget.dataset.name,
      bookMessage:[]
    })
  },
  search(e){
    var that = this;
    that.setData({
      content: e.detail.value
    })

    wx.request({
      url: 'https://www.apiopen.top/novelSearchApi?name=' + that.data.content,
      success: function (res) {
        that.setData({
          bookMessage: res.data.data
        })
      }
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
      var that = this;
      that.setData({
        name: options.name
      })
      console.log(that.data.name)
      wx.request({
        url: 'https://www.apiopen.top/novelSearchApi?name='+that.data.name,
        success:function(res){
         that.setData({
           bookMessage:res.data.data
         })
        }
      })
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
  onShareAppMessage: function () {

  }
})