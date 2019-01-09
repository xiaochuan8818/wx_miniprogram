const util = require('./util');
class apiModule {
    constructor() {
        this.domain = 'https://m.wangyunchuan.top/m/';
    }
    //用户注册接口
    userRegister( data,self ) {
        return util.wxRequest({
            url : `${this.domain}user_action/register`,
            data
        },self);
    }
    //用户登录接口
    userLogin(data, self) {
      return util.wxRequest({
        url: `${this.domain}user_action/login`,
        data
      }, self);
    }
}
module.exports = new apiModule;