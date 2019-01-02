const util = require('./util');
class apiModule {
    constructor() {
        this.domain = 'https://m.wangyunchuan.top/m/';
    }
    userRegister( self ) {
        util.wxRequest({
            url : `${this.domain}login/User_Register`
        },self);
    }
}
module.exports = new apiModule;