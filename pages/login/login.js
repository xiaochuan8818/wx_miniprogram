//index.js
//获取应用实例
const app = getApp()
const { util,apiModule } =  require('../../utils/common');
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    username : '',
    password : ''
  },
  onLoad: function () {
  
  },
  inputCurrentValue(e) {
    //监听输入值，setData改变值
    this.setData({
      [e.currentTarget.dataset.name] : e.detail.value.replace(/\s+/g,"")
    });
  },
  formSubmit(e) {
    if ( this.data.username.length < 4 || this.data.password.length < 6 || this.data.username.length > 12 ) {
      util.showToast({ title: '用户名或密码格式错误！' });
      return;
    }
    let { username,password } = e.detail.value;
    apiModule.userLogin({ username,password }).then( res=> {
      if( res.code === '000' ) {
        wx.setStorageSync('userMsg', res.data);
      }
      util.showToast({ title: res.msg });
    })
  }
})
