/**
 * Created by wangyang on 2018/12/4.
 * itwangyang@gmail.com
 * http://itwangyang.xyz
 */
function my$(id) {
    return document.getElementById(id);
}


//这个是兼容性的代码（IE,google,firefox）这些都兼容的
function setInnerText(element, text) {
    if (typeof(element.textContent) == "undefined") {
        element.innerText = text;
    } else {
        element.textContent = text;
    }
}