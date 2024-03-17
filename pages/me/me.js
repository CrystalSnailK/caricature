// pages/me/me.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userInfo:{},
    currentactive:0,
    likeId:[],
    recodeId:[],
    like:[],
    likeName:[],
    likeCount:[],
    recode:[],
    recodeName:[],
    recodeCount:[],
  },
// 获取用户信息
getUser(){
  // 调用微信的API
  wx.getUserProfile({
    desc: '完善个人信息',
    // 成功的回调函数
    success:(res)=>{
      // console.log(res.userInfo)
      var userInfo = res.userInfo
      // 全局变量
      this.setData({
        userInfo:userInfo
      })
    }
  })
},
tap(e){
  var currentactive=e.currentTarget.dataset.cut
  // console.log(currentactive)
  this.setData({
    currentactive:currentactive
  })
},
change(e){
  var cut=e.detail.current
  // console.log(cut)
  this.setData({
    cut:cut
  })
},


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
//   like(){
//     var app = getApp()
//     var likeId=app.globalData.likeId
//     var like=[]
//     var likeName=[]
//     var likeCount=[]
//     for( let i=0;i<likeId.length;i++ ){
//       var id=likeId[i]
//       return new Promise(function(resolve,reject){
//      wx.request({
//        url: 'https://www.kuaikanmanhua.com/v2/pweb/topic/'+id,
//         success:(res)=>{
//           var like1=resolve(res.data.data.topic_info.vertical_image_url)
//          var likeName1=resolve(res.data.data.topic_info.title)
//          var likeCount1=resolve(res.data.data.topic_info.likes_count)
//          like.push(like1)
//          likeName.push(likeName1)
//          likeCount.push(likeCount1)
//     }
//   })
// }
//       )
//       }
//       this.setData({
//         like: like,
//         likeName:likeName,
//         likeCount:likeCount})
    
//   },
  onLoad(options) {
  //   var app = getApp()
  //   var recodeId= app.globalData.recodeId
  //   var likeId=app.globalData.likeId
  //   this.setData({
  //     recodeId:recodeId,
  //     likeId:likeId})
  //   var like=[]
  //   var likeName=[]
  //   var likeCount=[]
  //   var recode=[]
  //   var recodeName=[]
  //   var recodeCount=[]
  //   for( let i=0;i<likeId.length;i++ ){
  //      var id=likeId[i]
  //      wx.request({
  //       url: 'https://www.kuaikanmanhua.com/v2/pweb/topic/'+id,
  //       success:(res)=>{
  //         var like1=res.data.data.topic_info.vertical_image_url
  //         var likeName1=res.data.data.topic_info.title
  //         var likeCount1=res.data.data.topic_info.likes_count
  //         like.push(like1)
  //         likeName.push(likeName1)
  //         likeCount.push(likeCount1)
  //         if(i==likeId.length-1){
  //           this.setData({
  //             like: like,
  //             likeName:likeName,
  //             likeCount:likeCount,
  //           })
  //           console.log(this.data.likeName)
  //         }
  //    }
  //  })

  //      }
  //    for( let i=0;i<recodeId.length;i++ ){
  //      var id=recodeId[i]
  //      wx.request({
  //        url: 'https://www.kuaikanmanhua.com/v2/pweb/topic/'+id,
  //        success:(res)=>{
  //          var recode1=res.data.data.topic_info.vertical_image_url
  //          var recodeName1=res.data.data.topic_info.title
  //          var recodeCount1=res.data.data.topic_info.likes_count
  //          recode.push(recode1)
  //          recodeName.push(recodeName1)
  //          recodeCount.push(recodeCount1)
  //         //  console.log(recodeName)
  //          if(i==recodeId.length-1){
  //           this.setData({
  //             recode: recode,
  //             recodeName:recodeName,
  //             recodeCount:recodeCount,
  //           })
  //           console.log(recodeName)
  //          }
            
  //     }
  //      })
  //    }


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
    var app = getApp()
    var likeId=app.globalData.likeId
    var like=app.globalData.like
    var likeName=app.globalData.likeName
    var likeCount=app.globalData.likeCount
    var recodeId= app.globalData.recodeId
    var recode=app.globalData.recode
    var recodeName=app.globalData.recodeName
    var recodeCount=app.globalData.recodeCount
          this.setData({
            recodeId:recodeId,
              likeId:likeId,
              like: like,
              likeName:likeName,
              likeCount:likeCount,
              recode:recode,
              recodeName:recodeName,
              recodeCount:recodeCount
            })

    // var likeId=app.globalData.likeId
    // var like=[]
    // var likeName=[]
    // var likeCount=[]
    // var recode=[]
    // var recodeName=[]
    // var recodeCount=[]
  //   for( let i=0;i<likeId.length;i++ ){
  //      var id=likeId[i]
       
  //      wx.request({
  //       url: 'https://www.kuaikanmanhua.com/v2/pweb/topic/'+id,
  //       success:(res)=>{
  //         console.log(1)
  //         var like1=res.data.data.topic_info.vertical_image_url
  //         var likeName1=res.data.data.topic_info.title
  //         console.log(likeName1)
  //         var likeCount1=res.data.data.topic_info.likes_count
  //         like.push(like1)
  //         likeName.push(likeName1)
  //         likeCount.push(likeCount1)
  //         this.setData({
  //             like: like,
  //             likeName:likeName,
  //             likeCount:likeCount,
  //           })
            
  //    }
  //  })

  //      }
    //  for( let i=0;i<recodeId.length;i++ ){
    //    var id=recodeId[i]
    //    wx.request({
    //      url: 'https://www.kuaikanmanhua.com/v2/pweb/topic/'+id,
    //      success:(res)=>{
    //       console.log(2)
    //        var recode1=res.data.data.topic_info.vertical_image_url
    //        var recodeName1=res.data.data.topic_info.title
    //        var recodeCount1=res.data.data.topic_info.likes_count
    //        recode.push(recode1)
    //        recodeName.push(recodeName1)
    //        recodeCount.push(recodeCount1)
    //        this.setData({
    //         recode: recode,
    //         recodeName:recodeName,
    //         recodeCount:recodeCount,
    //       })
    //   }
    //    })
    //  }
    //  this.setData({
    //   recodeId:recodeId,
    //   likeId:likeId})
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
  //   var app = getApp()
  //   var recodeId= app.globalData.recodeId
  //   var likeId=app.globalData.likeId
  //   this.setData({
  //     recodeId:recodeId,
  //     likeId:likeId})
  //   var like=[]
  //   var likeName=[]
  //   var likeCount=[]
  //   var recode=[]
  //   var recodeName=[]
  //   var recodeCount=[]
  //   for( let i=0;i<likeId.length;i++ ){
  //      var id=likeId[i]
  //      wx.request({
  //       url: 'https://www.kuaikanmanhua.com/v2/pweb/topic/'+id,
  //       success:(res)=>{
  //         var like1=res.data.data.topic_info.vertical_image_url
  //         var likeName1=res.data.data.topic_info.title
  //         var likeCount1=res.data.data.topic_info.likes_count
  //         like.push(like1)
  //         likeName.push(likeName1)
  //         likeCount.push(likeCount1)
  //         if(i==likeId.length-1){
  //           this.setData({
  //             like: like,
  //             likeName:likeName,
  //             likeCount:likeCount,
  //           })
  //           console.log(this.data.likeName)
  //         }
  //    }
  //  })

  //      }
  //    for( let i=0;i<recodeId.length;i++ ){
  //      var id=recodeId[i]
  //      wx.request({
  //        url: 'https://www.kuaikanmanhua.com/v2/pweb/topic/'+id,
  //        success:(res)=>{
  //          var recode1=res.data.data.topic_info.vertical_image_url
  //          var recodeName1=res.data.data.topic_info.title
  //          var recodeCount1=res.data.data.topic_info.likes_count
  //          recode.push(recode1)
  //          recodeName.push(recodeName1)
  //          recodeCount.push(recodeCount1)
  //         //  console.log(recodeName)
  //          if(i==recodeId.length-1){
  //           this.setData({
  //             recode: recode,
  //             recodeName:recodeName,
  //             recodeCount:recodeCount,
  //           })
  //           console.log(recodeName)
  //          }
            
  //     }
  //      })
  //    }
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