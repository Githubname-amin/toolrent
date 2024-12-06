// components/foot-bar/foot-bar.js
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
        footMap: [{
                message: '标价',
                index: 0,
                imgSrc: 'talkPrice',
                routerStr: ''
            },
            {
                message: '套餐',
                index: 1,
                imgSrc: 'talkPrice',
                routerStr: ''
            },
            {
                message: '地点拍照',
                index: 2,
                imgSrc: 'place',
                routerStr: ''
            },
            {
                message: '备注',
                index: 3,
                imgSrc: 'remarks',
                routerStr: ''
            },
            {
                message: '服务条款',
                index: 4,
                imgSrc: 'rule',
                routerStr: ''
            }
        ]
    },

    /**
     * 组件的方法列表
     */
    methods: {
        handleFootbar: function (e) {
            console.log('当前事件', e.currentTarget.dataset)
            const index = e.currentTarget.dataset.footIndex;
            
        }
    }
})