// index.js
const defaultAvatarUrl = 'https://mmbiz.qpic.cn/mmbiz/icTdbqWNOwNRna42FI242Lcia07jQodd2FJGIYQfG0LAJGFxM4FbnQP6yfMxBgJ0F3YRqJCJ1aPAK2dQagdusBZg/0'

Page({
    data: {
        motto: '底部标语测试',
        userInfo: {
            avatarUrl: defaultAvatarUrl,
            nickName: '',
        },
        hasUserInfo: false,
        canIUseGetUserProfile: wx.canIUse('getUserProfile'),
        canIUseNicknameComp: wx.canIUse('input.type.nickname'),
        // ------------------
        activeIndex: 0,
        tabs: ["选择租赁需求", "详情与价格"],
        bossPopupFlag: false,
        // 选择的商品
        choiceGoods: [],
    },
    methods: {
        // 事件处理函数
        bindViewTap() {
            wx.navigateTo({
                url: '../logs/logs'
            })
        },
        onChooseAvatar(e) {
            const {
                avatarUrl
            } = e.detail
            const {
                nickName
            } = this.data.userInfo
            this.setData({
                "userInfo.avatarUrl": avatarUrl,
                hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
            })
        },
        onInputChange(e) {
            const nickName = e.detail.value
            const {
                avatarUrl
            } = this.data.userInfo
            this.setData({
                "userInfo.nickName": nickName,
                hasUserInfo: nickName && avatarUrl && avatarUrl !== defaultAvatarUrl,
            })
        },
        getUserProfile(e) {
            // 推荐使用wx.getUserProfile获取用户信息，开发者每次通过该接口获取用户个人信息均需用户确认，开发者妥善保管用户快速填写的头像昵称，避免重复弹窗
            wx.getUserProfile({
                desc: '展示用户信息', // 声明获取用户个人信息后的用途，后续会展示在弹窗中，请谨慎填写
                success: (res) => {
                    console.log(res)
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        },
        // ----------------
        // 页面切换
        changePageIndex: function (e) {
            console.log('页面切换', e)
        },


    },
    // ----------------------
    onClosePopup: function () {
        this.changeBossPopup(false)
    },
    changeBossPopup: function (nowFlag) {
        this.setData({
            bossPopupFlag: nowFlag.detail
        })
    },
    // 选择展示
    tabClick: function (e) {
        this.setData({
            activeIndex: e.currentTarget.id
        })
    },
    // 两种选择之间的相互跳转
    // 下方的小tab也会使用这个
    changeIndexInsidePage: function (e) {
        const pageName = e.detail.page
        if (pageName == 'pricePage') {
            this.setData({
                activeIndex: 1
            })
        } else if (pageName == 'rentPage') {
            this.setData({
                activeIndex: 0
            })
        }
        // 遗留具体定位没有做
    },
    // 记录选择的商品
    changeChoiceGoods: function (e) {
        // 新增某种的数量、减少数量  type,data
        const nowChild = this.selectComponent('#goodsChoice');
        const nowNumber = nowChild.getChoiceNumber();
        console.log('查看商品', nowChild, nowNumber);
    },
    onload: function () {},
})