let { util,apiModule } =  require('../../utils/common');
// pages/register.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    username : '',
    password : '',
    repassword : '',
    valicode : '',
    codeUrl: `https://m.wangyunchuan.top/m/user_action/getcode?t=${new Date().getTime()}`
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
  /**
   * 注册逻辑
   */
  formSubmit(e) {
    let datas = this.data;
    if ( datas.username.length < 4 || 
        datas.password.length < 6 ||
        datas.password != datas.repassword ||
        datas.username.length > 13 
      ) 
    {
      util.showToast({ title: '用户名或密码格式有误！' });
      return;
    } else if ( datas.valicode.length != 4 ) 
    {
      util.showToast({ title: '校验码输入有误！' });
      return;
    }
    let { username, password,valicode } = e.detail.value;
    console.log(e.detail.value)
    apiModule.userRegister({username,password,valicode}).then( res=>{
      if( res.code === '000' ) {
        wx.navigateTo({
          url: '../login/login',
        });
      }
      util.showToast({ title: res.msg });
    });
  },
  /**
   * 更改校验码
   */
  changeValicode() {
    this.setData({
      codeUrl: `https://m.wangyunchuan.top/m/user_action/getcode?t=${new Date().getTime()}`
    });
  }
})