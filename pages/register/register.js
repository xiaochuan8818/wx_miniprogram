let { util } =  require('../../utils/common');
// pages/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username : '',
    password : ''
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
  },
  inputCurrentValue(e) {
    //监听输入值，setData改变值
    this.setData({
      [e.currentTarget.dataset.name] : e.detail.value.replace(/\s+/g,"")
    });
  },
  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },
  formSubmit(e) {
    if ( this.data.username.length < 4 || this.data.password.length < 6 || this.data.username.length > 12 ) {
      util.showToast({ title: '用户名或密码格式错误！' });
      return;
    }
    let { username, password } = e.detail.value;
    console.log('register')

  }
})