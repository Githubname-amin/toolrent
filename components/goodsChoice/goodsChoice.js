// components/goodsChoice/goodsChoice.js
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
        goodsDetail: [{
                id: 'goods1',
                itemName: '1.7米脚手架',
                itemImgSrc: '/img/bossWeixin.png',
                itemDetailMsg: '1.7米高，1套含1块踏板，2对斜撑。不含轮子',
                itemYajinDetail: '100元/套'
            },
            {
                id: 'goods2',
                itemName: '1米脚手架',
                itemImgSrc: '/img/bossWeixin.png',
                itemDetailMsg: '1米高，1套含1块踏板，2对斜撑。不含轮子',
                itemYajinDetail: '100元/套'
            },
            {
                id: 'goods3',
                itemName: '轮子',
                itemImgSrc: '/img/bossWeixin.png',
                itemDetailMsg: '单位:只',
                itemYajinDetail: '30元/只'
            }
        ],
        makeCopyGoodsNumber: {}
    },

    /**
     * 组件的方法列表
     */
    methods: {
        // 统计数字
        getNowChoiceNumber: function (e) {
            for (let item in this.data.goodsDetail) {
                console.log('方法', item);
                const nowChild = this.selectComponent(`#goodsItem${item}`);
                if (nowChild) {
                    const nowNumber = nowChild.getData();
                    const goodsDetailItemName = this.data.goodsDetail[item].id
                    this.setData({
                        makeCopyGoodsNumber: {
                            ...this.data.makeCopyGoodsNumber,
                            [goodsDetailItemName]: nowNumber
                        }
                    })
                }
            }
        },
        getChoiceNumber: function () {
            this.getNowChoiceNumber();
            return this.data.makeCopyGoodsNumber
        }
    }
})