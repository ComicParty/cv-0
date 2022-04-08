let html = document.querySelector('#html');
let style = document.querySelector('#style');
let str = `
/*我是一枚前端新人
* 我来自江苏徐州
* 据说成为程序员会秃头，明显是个谣言！
* 为了破除谣言，我决定以身试毒（搞笑诺奖我拿定了:P）
* 加油，实现目标！
* 接下来，我要加样式了！
* 样式是：
* 我来演示一下前端功底
* 首先我要准备一个div
**/
    #div1{
    border:1px solid green;
    width:200px;
    height:200px;
    }
/*接下来，我要把DIV变成一个太极
*    注意看好了
*首先把div变成一个圆
*/
#div1{
    border-radius:50%;
    box-shadow:0 0 3px rgba(0,0,0,0.5);
    border:none;
}
/*太极有阴阳两鱼
**一白一黑
**/
#div1{
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,1) 50%, rgba(255,255,255,1) 100%);
}
/*继续加*/
#div1::before{
    width:100px;
    height:100px;
    // border:1px solid red;
    left:50%;
    transform:translateX(-50%);
    top:0;
    background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%, rgba(0,0,0,1) 100%);
    border-radius:50%;
}
#div1::after{
    width:100px;
    height:100px;
    // border:1px solid red;
    left:50%;
    transform:translateX(-50%);
    bottom:0;
    background: radial-gradient(circle, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%, rgba(255,255,255,1) 100%);
    border-radius:50%;
}
`;
let str0 = '';
// console.log('str长度：',str.length)
// html.innerHTML=str.substring(0,n)
let n = 0;
let step = ()=>{
    setTimeout(()=>{
        if (str[n] === '\n') str0 += '<br>';
        else if (str[n] === ' ') str0 += '&nbsp;';
        else str0 += str[n];
        style.innerHTML = str.substr(0, n);
        html.innerHTML = str0;
        window.scrollTo(0, 99999);
        html.scrollTo(0, 99999);
        n += 1;
        if (n < str.length) step();
    }, 40);
};
//推翻正则重新写，用string2
// let step = ()=>{
//     setTimeout(()=>{
//
//         str =str.replace(/\n/g,'<br>')
//         str =str.replace(/ /g,'&nbsp')
//         if(str[n]==='<'){//正则之前检测 是 \n，
//             n+=4
//         }
//         if(str[n]==='&'){ //TODO: 缺点，遇到连续的 空格 就不行了，并且 文章中如果有 & < 号需要使用，会跳字
//             n+=5            //str.substring(n,n+4) === '&nbsp'  if里面，这样可以解跳字，但是太占内存了
//         }                   //又㕛叒叕遇到问题了，如果，我就想让用户看到 &nbsp <br>，就不能替换！。。不会遇到！我们检测是\n ' '这些被正则替换了！他们会正常输出，所以 不会显示
//         html.innerHTML=str.substring(0,n)
//         n+=1
//         if(n-1<str.length){
//             step()
//         }
//     },100)
// }
step();

//# sourceMappingURL=index.de158e3a.js.map
