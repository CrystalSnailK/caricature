// pages/search/search.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    hotList:[],   //畅销榜
    keyword:'',
    allMatch:[]

  },
  ipt(e){
    console.log(e.detail.value)
    var value = e.detail.value
    if(value == ''){
      this.setData({
        keyword:'',
        allMatch:[]
      })
    }else{
      // 模糊查询
      wx.request({
         url: 'https://www.kuaikanmanhua.com/v1/search/suggestion_topic_author?q='+value+'&type=2&f=2',
        success:(res)=>{
         // console.log(res.data.data.info)
          var allMatch = res.data.data.info
          this.setData({
            allMatch:allMatch
          })
        }
      })
    }
  },
  search(e){
    // console.log(e.currentTarget.dataset.name)
    var name=e.currentTarget.dataset.name
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v1/search/topic?q='+name+'&f=3&size=18',
      success:(res)=>{
        //console.log(res.data.data.hit[0].id)
    //     var id=parseInt(res.data.data.hit[0].id)
    //     var app = getApp()
    // app.globalData.recodeId.unshift (id)
    // wx.navigateTo({
    //   url: '/pages/detail/detail?id='+id,
    // })
    var app = getApp()
    var id =parseInt(res.data.data.hit[0].id)
    app.globalData.recodeId.unshift (id)
     console.log(app.globalData.recodeId)
     var recode=app.globalData.recode
     var recodeName=app.globalData.recodeName
     var recodeCount=app.globalData.recodeCount
     wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/topic/'+id,
      success:(res)=>{
       console.log(2)
        var recode1=res.data.data.topic_info.vertical_image_url
        var recodeName1=res.data.data.topic_info.title
        var recodeCount1=res.data.data.topic_info.likes_count
        recode.unshift(recode1)
        recodeName.unshift(recodeName1)
        recodeCount.unshift(recodeCount1)
        var app = getApp()
        app.globalData.recode= recode
        app.globalData.recodeName=recodeName
        app.globalData.recodeCount=recodeCount
  
   }
    })
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
      }
    })
  },
  
  // 跳转到播放页面  
  toDetail(e){
    var app = getApp()
    var id =parseInt(e.currentTarget.dataset.id)
    app.globalData.recodeId.unshift (id)
     console.log(app.globalData.recodeId)
     var recode=app.globalData.recode
     var recodeName=app.globalData.recodeName
     var recodeCount=app.globalData.recodeCount
     wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/topic/'+id,
      success:(res)=>{
       console.log(2)
        var recode1=res.data.data.topic_info.vertical_image_url
        var recodeName1=res.data.data.topic_info.title
        var recodeCount1=res.data.data.topic_info.likes_count
        recode.unshift(recode1)
        recodeName.unshift(recodeName1)
        recodeCount.unshift(recodeCount1)
        var app = getApp()
        app.globalData.recode= recode
        app.globalData.recodeName=recodeName
        app.globalData.recodeCount=recodeCount
  
   }
    })
    wx.navigateTo({
      url: '/pages/detail/detail?id='+id,
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
   // 获取畅销榜数据
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/all_rank/topics',
      headers: {
        'Content-Type': 'application/json'
      },
    //回调函数
      success:(res)=>{
        var hotList = res.data.data.ranks[4].topics
        console.log(hotList)
        this.setData({
          hotList:hotList
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