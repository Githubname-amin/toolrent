// components/rentBefore/rentBefore.js
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

    },

    /**
     * 组件的方法列表
     */
    methods: {
        setBossPopup: function (e) {
            if (e.currentTarget.dataset.dropprice) {
                // 第一个，跳转价格
                const message = {
                    page: 'pricePage',
                    index: 0
                }
                this.triggerEvent('changeIndexInsidePage', message)
            } else {
                this.triggerEvent('changeBossPopup', {
                    message: true
                })
            }
        }
    }
})