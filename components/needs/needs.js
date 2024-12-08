// components/needs/needs.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {

    },

    /**
     * 组件的初始数据
     */
    data: {
        actionItem: ''
    },

    /**
     * 组件的方法列表
     */
    methods: {
        choiseItem: function (e) {
            const nowChioseItem = Number(e.currentTarget.dataset.choiseitemindex)
            if (nowChioseItem) {
                this.setData({
                    actionItem: `choiseItem${nowChioseItem}`
                })
            }
        },
        choiseBoss: function (e) {
            this.triggerEvent('changeBossPopup', {
                message: true
            })
        }
    }
})