Page({
  data: {
    myLongitude: null,
    myLatitude: null,

  },
  onLoad() {
    let that = this
    wx.getLocation({
      type: 'wgs84',
      success (res) {
        const latitude = res.latitude
        const longitude = res.longitude
        const speed = res.speed
        const accuracy = res.accuracy
        that.setData({
          myLatitude: latitude,
          myLongitude: longitude,
        })
      }
     })
     
  }
})