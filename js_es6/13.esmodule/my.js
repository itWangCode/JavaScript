/**
 * Created by wangyang on 2019-03-27.
 * itwangyang@gmail.com
 * http://www.itwangyang.xyz
 */

//模块 第三方（npm install > node_modules），不用./
// 自定义的，要写./
//使用解构赋值，然后获取，导出的内容
//let{num,str} = {num:1000,str:"wangyang"}
//import 会变量提升,一般开发都写在上面

//单个获取
console.log(num);
import {num,str} from "./wang.js";

//一次性获取出来，
import * as wang from "./wang.js";
console.log(wang);

import px from "./px.js";
console.log(px);


// let str = 2; 不可以重复声明，在es6中定义一个变量都不可以重复声明的