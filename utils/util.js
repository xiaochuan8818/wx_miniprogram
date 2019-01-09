const formatTime = date => {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()
  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

const formatNumber = n => {
  n = n.toString()
  return n[1] ? n : '0' + n
}
const showToast = param => {
  wx.showToast({
    title: param.title,
    icon: param.icon || 'none',
    mask: param.mask || true,
    duration: param.duration || 2000
  });
}
//封装微信请求
const wxRequest = function( param,self ) {
  wx.showLoading({ title: '加载中' });
  return new Promise( ( resolve,reject ) => {
    let _params = Object.assign( {},{
      method : 'POST',
      header : {
        'content-type': 'application/x-www-form-urlencoded'
      },
      success : function( res ) {
        wx.hideLoading();
        resolve( res.data );
        self && self.setData({ result : res.data });
      },
      fail : function() {
        wx.hideLoading();
        reject();
        showToast({ title : '获取数据失败！' });
      },
      complete : function( data ) {
        wx.hideLoading();
      }
    },param);
    wx.request( _params );
  })
}
module.exports = {
  formatTime: formatTime,
  showToast : showToast,
  wxRequest : wxRequest
}
