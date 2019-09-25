/*
以后开发中我们会使用很多插件，每一个插件的配置代码固定的。可以封装到一个js文件中
1.减少HTML页面代码冗余
2.实现复用  (多个页面需要使用相同的插件，就不需要复制粘贴配置代码，只需要导入这个js即可)
*/

//入口函数 ： 插件导入都是在hrad中，此时DOM没有加载完。所以配置代码一般要等DOM数加载完毕后执行
$(function () {
    /* 3.初始化 */
    jeDate("#testico", {
        theme: { bgcolor: "#D91600", pnColor: "#FF6653" },
        format: "YYYY-MM-DD",
        isinitVal: true,
    });
    /* 3.初始化 */
    tinymce.init({
        selector: '#mytextarea',
        language: 'zh_CN',
        directionality: 'ltl',
        browser_spellcheck: true,
        contextmenu: false,
        plugins: [
            "advlist autolink lists link image charmap print preview anchor",
            "searchreplace visualblocks code fullscreen",
            "insertdatetime media table contextmenu paste imagetools wordcount",
            "code"
        ],
        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",

    });
})


//沙箱模式
// (function () {
//     //外接js文件一般写在head中，此时DOM树还没有加载，所以需要将代码写到入口函数中
//     $(function () {
//         jeDate('#testico', {
//             trigger: 'click',
//             theme: { bgcolor: "#00A680", pnColor: "#00DDAA" },//绿色主题
//             format: "YYYY-MM-DD",
//             isinitVal: true,
//         });

//         /* 初始化选项 */
//         tinymce.init({
//             selector: '#mytextarea',
//             height: '350px',
//             language: 'zh_CN',
//             directionality: 'ltl',
//             browser_spellcheck: true,
//             contextmenu: false,
//             plugins: [
//                 "advlist autolink lists link image charmap print preview anchor",
//                 "searchreplace visualblocks code fullscreen",
//                 "insertdatetime media table contextmenu paste imagetools wordcount",
//                 "code"
//             ],
//             toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | code",
//         });
//     });

// })();