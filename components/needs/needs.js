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
        choiceItem: function (e) {
            const nowChioseItem = Number(e.currentTarget.dataset.choiceitemindex)
            if (nowChioseItem) {
                this.setData({
                    actionItem: `choiceItem${nowChioseItem}`
                })
            }
        },
        choiceBoss: function (e) {
            this.triggerEvent('changeBossPopup', {
                message: true
            })
        }
    }
})