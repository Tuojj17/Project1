const shortcut = {
    template: "\
    <div class='py-container'> \
        <div class='shortcut'> \
            <ul class='fl'> \
               <li class='f-item'>乐优欢迎您！</li> \
               <li class='f-item' v-if='user && user.username' style='width: 1100px'>\
               尊敬的会员，<span style='color: red;'>{{user.username}}</span>\
               <a href='javascript:void(0)' @click='logout' style='float: right;color: red'>退出</a> \
               </li>\
               <li v-else class='f-item'> \
                   请<a href='javascript:void(0)' @click='gotoLogin'>登录</a>　 \
                   <span><a href='register.html' target='_blank'>免费注册</a></span> \
               </li> \
           </ul> \
       </div> \
    </div>\
    ",
    name: "shortcut",
    data() {
        return {
            user: null
        }
    },
    created() {
        ly.http("/auth/verify")
            .then(resp => {
                this.user = resp.data;
            })
    },
    methods: {
        gotoLogin() {
            window.location = "login.html?returnUrl=" + window.location;
        },
        logout() {
            ly.http("/auth/logout")
                .then(resp =>{
                    window.location =  window.location;
                })
                .catch()
        }
    }
}
export default shortcut;