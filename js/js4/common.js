/**
 * Created by Administrator on 2017-09-16.
 */
function my$(id) {
    return document.getElementById(id);
}


//设置任意的标签中间的任意文本内容
function setInnerText(element,text) {
    //判断浏览器是否支持这个属性
    if(typeof element.textContent =="undefined"){//不支持
        element.innerText=text;
    }else{//支持这个属性
        element.textContent=text;
    }
}

//获取任意标签中间的文本内容
function getInnerText(element) {
    if(typeof element.textContent=="undefined"){
        return element.innerText;
    }else{
        return element.textContent;
    }
}
//------>全部兼容代码
//为任意元素，绑定任意的事件，任意的元素，事件的类型，事件处理函数
function addEventListener(element,type,fn) {
    //判断浏览器是否支持这个方法
    if (element.addEventListener){
        element.addEventListener(type,fn.false);
    }else if(element.attachEvent){
        element.attachEvent("on"+type,fn);
    }else {
        element["on"+type] = fn;
    }
}
addEventListener(my$("btn"),"click",function () {
    console.log("哇，好神奇");
});
