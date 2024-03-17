// pages/watch/watch.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
id:'',
zhangId:'',
index:0,
max:0,
watch:[]
  },

  toLast(){
    if(this.data.index!=0){
    var index=this.data.index
    var id=this.data.id
    index=parseInt(index)-1
   this.setData({
       index:index
       })
       wx.navigateTo({
         url: '/pages/watch/watch?id='+id+'&index='+index,
       })
    }
  },
  toNext(){
if(this.data.index!=this.setData.max){
  var index=this.data.index
  var id=this.data.id
  index=parseInt(index)+1
  this.setData({
    index:index
    })
    wx.navigateTo({
      url: '/pages/watch/watch?id='+id+'&index='+index,
    })
}
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   var id =options.id//shuben
   var index=options.index
   this.setData({
     id:id,
     index:index
   })
   wx.request({
     url: 'https://www.kuaikanmanhua.com/v2/pweb/topic/'+id,
     success:(res)=>{
      var zhangId=res.data.data.topic_info.comics[index].id
      var max=parseInt(res.data.data.topic_info.comics.length)
      this.setData({
        max:max,
        zhangId:zhangId
      })
      wx.request({
      url: 'https://m.kuaikanmanhua.com/v2/mweb/comic/'+zhangId,
      success:(res)=>{
         var watch=res.data.data.comic_info
         this.setData({
           watch:watch
         })
      }
    })
    }
   })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})