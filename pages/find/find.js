// pages/find/find.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    TopIndex:  0
  },

  changstyle: function(e) {
    let index = e.currentTarget.dataset.index;           
    /*定义index等于当前页面的dataset.index*/
    this.setData({
      TopIndex: index      
      /*定义当前数据的TopIndex等于  index 等于dataset.index*/
    })         
  } ,

// 跳转到搜索页面
toSearch(){
  wx.navigateTo({
  url: '/pages/search/search',
  })
},
//漫画详细页面
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
//漫画简介
toMore(){
  wx.navigateTo({
    url: '/pages/more/more',
  })
},
toMore1(){
  wx.navigateTo({
    url: '/pages/more1/more1',
  })
},
toMore2(){
  wx.navigateTo({
    url: '/pages/more2/more2',
  })
},
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {
    // 人气榜
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/all_rank/topics',
      headers: {
        'Content-Type': 'application/json'
      },
      // 回调函数
      success:(res)=>{
        //console.log(res.data.data.ranks[0].topics)
        var renqi = res.data.data.ranks[0].topics
        // 修改数据
        this.setData({
          renqi:renqi
        })
      }
    })
    //新作榜
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/all_rank/topics',
      headers: {
        'Content-Type': 'application/json'
      },
      //回调函数
      success:(res)=>{
        //console.log(res.data.data.ranks[1].topics)
        var xinz = res.data.data.ranks[1].topics
        //修改数据
        this.setData({
          xinz:xinz,
        })
      }
    })
    //飙升榜
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/all_rank/topics',
      headers: {
        'Content-Type': 'application/json'
      },
      //回调函数
      success:(res)=>{
       // console.log(res.data.data.ranks[2].topics)
        var biaos = res.data.data.ranks[2].topics
        //修改数据
        this.setData({
          biaos:biaos,
        })
      }
    })
    //全网都在看
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/home',
      headers: {
        'Content-Type': 'application/json'
      },
      // 回调函数
      success:(res)=>{
        //console.log(res.data.data.discovery_modules[0].topics)
        var quanw = res.data.data.discovery_modules[0].topics
        // 修改数据
        this.setData({
          quanw:quanw
        })
      }
    })
    //真香漫Pick区！
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/home',
      headers: {
        'Content-Type': 'application/json'
      },
      // 回调函数
      success:(res)=>{
        //console.log(res.data.data.discovery_modules[1].topics)
        var zhenx = res.data.data.discovery_modules[1].topics
        // 修改数据
        this.setData({
          zhenx:zhenx
        })
      }
    })
    //精选漫画
    wx.request({
      url: 'https://www.kuaikanmanhua.com/v2/pweb/home',
      headers: {
        'Content-Type': 'application/json'
      },
      // 回调函数
      success:(res)=>{
        //console.log(res.data.data.discovery_modules[2].topics)
        var jingx = res.data.data.discovery_modules[2].topics
        // 修改数据
        this.setData({
          jingx:jingx
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