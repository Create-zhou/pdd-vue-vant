module.exports = {
    css:{
        loaderOptions:{
            postcss:{
                plugins:[
                   require("postcss-plugin-px2rem")({
                    rootValue: 75,  //换算基数，默认100，这样的话把根标签的字体规定为irem为50px,这样就可以从设计稿上量出多少个px直接在代码中写多2少个px
                    unitPrecision: 2, //予许rem单位增长到的十进制数字
                    propWhiteList:[], //默认值是一个空数组，这意味着禁用白名单并启用所有属性
                    propBlackList:[],//黑名单
                    exclude: /(node_modules)/, //利用正则表达式排除某些文件夹的方法，例如 /(node_modules)/，如果想把前端的ui框架内的px也转换成REM,请把此属性设置为默认值
                    selectorBlackList: [], //要忽略并保存为px的选择器
                    ignoreIdentifier:false,//（bool/string）忽略单个属性的方法，启用ignoreIdentifier，repalce将自动设置为true
                    replace: true,//(布尔值)替换包含REM的规则，而不是添加回退
                    mediaQuery: false,//（布尔值）予许在媒体查询中转换px
                    minPixelValue: 3,//设置要替换的最小像素值（3px会转换rem），默认值为0
                   })
                ]
            },
            stylus:{
                'resolve url':true,
                'import':[]
            }
        }
    }
  };