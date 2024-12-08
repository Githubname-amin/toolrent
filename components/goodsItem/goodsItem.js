// components/goodsItem/goodsItem.js
Component({

    /**
     * 组件的属性列表
     */
    properties: {
        itemDetail: {
            type: Object,
            value: {
                itemName: '',
                itemImgSrc: '',
                itemDetailMsg: '',
                itemYajinDetail: ''
            }
        }
    },

    /**
     * 组件的初始数据
     */
    data: {
        nowNumber: 0
    },

    /**
     * 组件的方法列表
     */
    methods: {
        numberDown: function () {
            if (this.data.nowNumber == 0) return
            this.setData({
                nowNumber: this.data.nowNumber - 1
            })
        },
        numberAdd: function () {
            this.setData({
                nowNumber: this.data.nowNumber + 1
            })
        },
        getData() {
            return this.data.nowNumber;
        }
    }
})