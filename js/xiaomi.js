/*
* @Author: Administrator
* @Date:   2018-09-03 19:31:03
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-14 01:17:00
*/

//开头轮播图
//获取元素
	window.onload=function() {	
    let imgs=document.querySelectorAll(".photo");
    let dots=document.querySelectorAll(".dian");
    let banner=document.querySelectorAll(".banner")[0];
    let widths=parseInt(getComputedStyle(imgs[0],null).width);
    let leftbtn=document.querySelectorAll(".leftbtn")[0];
    let rightbtn=document.querySelectorAll(".rightbtn")[0];
    // console.log(imgs,dots,banner,widths);
    // //初始值
    let now=0;
    let next=0;
    imgs[0].style.left=0;
    dots[0].classList.add("active");
    let flag=true;
    // 自动轮播
    let t=setInterval(move,2000);
    function move() {
        next++;
        if(next==imgs.length){
            next=0;
        }
        imgs[next].style.left=widths+"px";
        animate(imgs[now],{left:-widths});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now=next;
    }
    //左箭头
    function moveL() {
        next--;
        if(next<0){
            next=imgs.length-1;
        }
        imgs[next].style.left=-widths+"px";
        animate(imgs[now],{left:widths});
        animate(imgs[next],{left:0},function () {
            flag=true;
        });
        dots[now].classList.remove("active");
        dots[next].classList.add("active");
        now=next;
    }
    leftbtn.onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        moveL();
    }
    rightbtn.onclick=function () {
        if(!flag){
            return;
        }
        flag=false;
        move();
    }
    banner.onmouseover=function () {
        clearInterval(t);
    }
    banner.onmouseout=function () {
        t=setInterval(move,1000);
    }
    // 鼠标移入轮播点
    for(let i=0;i<dots.length;i++){
        dots[i].onclick=function () {
            for(let j=0;j<dots.length;j++){
                imgs[j].style.left=-widths+"px";
                dots[j].classList.remove("active");
            }
            imgs[i].style.left=0;
            dots[i].classList.add("active");
            now=i;
            next=i;
        }

    }




    let box=document.querySelectorAll(".box");
    console.log(box);






   



    //内容轮播
    function contentbanner(imgs,dots,leftbtn,rightbtn,widths,active){

    let now1=0;
    let next1=0;
    imgs[0].style.left=0;
    dots[0].classList.add(active);
    let flag1=true;
    // 自动轮播
    function move1() {
        next1++;
        if(next1==imgs.length){
            next1=0;
        }
        imgs[next1].style.left=widths+"px";
        animate(imgs[now1],{left:-widths});
        animate(imgs[next1],{left:0},function () {
            flag1=true;
        });
        dots[now1].classList.remove(active);
        dots[next1].classList.add(active);
        now1=next1;
    }
    //左箭头
    function move1L() {
        next1--;
        if(next1<0){
            next1=imgs.length-1;
        }
        imgs[next1].style.left=-widths+"px";
        animate(imgs[now1],{left:widths});
        animate(imgs[next1],{left:0},function () {
            flag1=true;
        });
        dots[now1].classList.remove(active);
        dots[next1].classList.add(active);
        now1=next1;
    }
    leftbtn.onclick=function () {
        if(next1==0){
            return;
        }
        if(!flag1){
            return;
        }
        flag1=false;
        move1L();
    }
    rightbtn.onclick=function () {
        if(next1==dots.length-1){
            return;
        }
        if(!flag1){
            return;
        }
        flag1=false;
        move1();
    }
    for(let a=0;a<dots.length;a++){
        dots[a].onclick=function(){
            if(now1==a){
                return;
            }else if(now1<a){
                imgs[a].style.left=widths+"px";
                animate(imgs[now1],{left:-widths1});
                animate(imgs[a],{left:0});
                dots[now1].classList.remove(active);
                dots[a].classList.add(active);
            }else if(now1>a){
                imgs[a].style.left=-widths+"px";
                animate(imgs[now1],{left:widths});
                animate(imgs[a],{left:0});
                dots[now1].classList.remove(active);
                dots[a].classList.add(active);
            }
            next1=now1=a;
     
        }
    }
}

    let imgs1=document.querySelectorAll(".book .moveimg");
    let dots1=document.querySelectorAll(".book .span1");
    let widths1=parseInt(getComputedStyle(imgs1[0],null).width);
    let leftbtn1=document.querySelectorAll(".book .leftbtn1")[0];
    let rightbtn1=document.querySelectorAll(".book .rightbtn1")[0];
    console.log(imgs1,dots1,widths,leftbtn1,rightbtn1);
    contentbanner(imgs1,dots1,leftbtn1,rightbtn1,widths1,"one");


    let imgs2=document.querySelectorAll(".topic .moveimg");
    let dots2=document.querySelectorAll(".topic .span1");
    let widths2=parseInt(getComputedStyle(imgs2[0],null).width);
    let leftbtn22=document.querySelectorAll(".topic .leftbtn1")[0];
    let rightbtn22=document.querySelectorAll(".topic .rightbtn1")[0];
    // console.log(imgs1,dots1,widths,leftbtn1,rightbtn1);
    contentbanner(imgs2,dots2,leftbtn22,rightbtn22,widths2,"one");


    let imgs3=document.querySelectorAll(".play .moveimg");
    let dots3=document.querySelectorAll(".play .span1");
    let widths3=parseInt(getComputedStyle(imgs3[0],null).width);
    let leftbtn33=document.querySelectorAll(".play .leftbtn1")[0];
    let rightbtn33=document.querySelectorAll(".play .rightbtn1")[0];
    // console.log(imgs3,dots3,widths3,leftbtn33,rightbtn33);
    contentbanner(imgs3,dots3,leftbtn33,rightbtn33,widths3,"one");


    let imgs4=document.querySelectorAll(".use .moveimg");
    let dots4=document.querySelectorAll(".use .span1");
    let widths4=parseInt(getComputedStyle(imgs4[0],null).width);
    let leftbtn4=document.querySelectorAll(".use .leftbtn1")[0];
    let rightbtn4=document.querySelectorAll(".use .rightbtn1")[0];
    // console.log(imgs3,dots3,widths3,leftbtn33,rightbtn33);
    contentbanner(imgs4,dots4,leftbtn4,rightbtn4,widths4,"one");



     //闪购
    let leftbtn2=document.querySelector(".shoppleft-list");
    let rightbtn2=document.querySelector(".shoppright-list");
    // console.log(leftbtn2,rightbtn2);
    let ul=document.querySelector(".light");
    let w=parseInt(getComputedStyle(ul,null).width)/2;
    // console.log(w);
    let time=0;
    rightbtn2.onclick=function () {
        time++;
        if(time==2){
            time=1;
        }
        console.log(time);
        ul.style.transform=`translate(${(-w*time)}px)`;
    }
    leftbtn2.onclick=function () {
        time--;
        if(time==-1){
            time=0;
        }
        // console.log(time);
        ul.style.transform=`translate(${(-w*time)}px)`;
    }


    //为你推荐
    let leftbtn3=document.querySelector(".rleft-list");
    let rightbtn3=document.querySelector(".rright-list");
    console.log(leftbtn3,rightbtn3);
    let ul1=document.querySelector(".fresh");
    console.log(ul1);
    let w1=parseInt(getComputedStyle(ul1,null).width)/3;
    console.log(w1);
    let time1=0;
    rightbtn3.onclick=function () {
        time1++;
        if(time1==3){
            time1=2;

        }
        console.log(time1);
        ul1.style.transform=`translate(${(-w1*time1)}px)`;
    }
    leftbtn3.onclick=function () {
        time1--;
        if(time1==-1){
            time1=0;
        }
        // console.log(time);
        ul1.style.transform=`translate(${(-w1*time1)}px)`;
    }

    //商品右侧栏
    let lis=document.querySelectorAll(".xxk");
    let son=document.querySelectorAll(".son");
        console.log(lis,son);
        for(let i=0;i<lis.length;i++){
            lis[i].onmouseover=function () {
                for(let j=0;j<son.length;j++){
                    son[j].style.display="none";
                }
                son[i].style.display="block";
            }
            lis[i].onmouseout=function(){
                son[i].style.display="none";
            }
        }






    let lis1=document.querySelectorAll(".tellinger .telling");
    let son1=document.querySelectorAll(".son1");
        console.log(lis1);
        console.log(son1); 
        for(let i=0;i<lis1.length;i++){
            lis1[i].onmouseover=function () {
                for(let j=0;j<son1.length;j++){
                    son1[j].style.display="none";
                } 
                son1[i].style.display="block";
                 
        }
        lis1[i].onmouseout=function(){
                 son1[i].style.display="none";
         }
        }
       


    //家电选项卡
     let hot=document.querySelectorAll(".hot");
     let hot1=document.querySelectorAll(".bottom-right");
     console.log(hot1);
     hot[0].classList.add("active");
     hot1[0].style.zIndex=199;
     for(let i=0;i<hot.length;i++){
        hot[i].onmouseenter=function(){
            for(let j=0;j<hot1.length;j++){
                hot1[j].style.zIndex=0;
                hot[j].classList.remove("active");
            } 
             hot1[i].style.zIndex=200; 
             hot[i].classList.add("active");      
        }
     }


//返回顶部
 let back=document.querySelector(".back"); 
 console.log(back);
     window.onscroll=function(){
        let h=document.body.scrollTop||document.documentElement.scrollTop;
         back.onclick=function(){
            animate(document.body,{scrollTop:0},600);
            animate(document.documentElement,{scrollTop:0},600);
    }
}
}


