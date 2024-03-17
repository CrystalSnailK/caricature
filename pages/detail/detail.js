// pages/detail/detail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    title:'',
    title_img:'',
    zhang:[],
    all:{},
    dian:0
  },
love(e){
var dian=1
this.setData({
  dian:dian
})
var app = getApp()
var likeid=parseInt (e.target.dataset.likeid)
app.globalData.likeId.unshift(likeid)
var like=app.globalData.like
    var likeName=app.globalData.likeName
    var likeCount=app.globalData.likeCount
    // console.log(like)
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/topic/'+likeid,
        success:(res)=>{
          var like1=res.data.data.topic_info.vertical_image_url
          var likeName1=res.data.data.topic_info.title
          var likeCount1=res.data.data.topic_info.likes_count
          like.unshift(like1)
          likeName.unshift(likeName1)
          likeCount.unshift(likeCount1)
          var app = getApp()
          app.globalData.like= like
            app.globalData.likeName=likeName
            app.globalData.likeCount=likeCount
            console.log(likeName)
        }
    })
 
 console.log(app.globalData.likeId)
},
  toWatch(e){
var id=e.currentTarget.dataset.id//是书本
var index=parseInt(e.currentTarget.dataset.index)//shiindex
wx.navigateTo({
  url: '/pages/watch/watch?id='+id+'&index='+index,
})
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    //  console.log(options.id)
     var id=options.id
    this.setData({
        id:id
    })
//请求横板封面图
wx.request({
  url: 'https://www.kuaikanmanhua.com/v2/pweb/topic/'+id,
  success:(res)=>{
    // console.log(res.data.data.topic_info)
    var all=res.data.data.topic_info
    this.setData({
      all:all
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