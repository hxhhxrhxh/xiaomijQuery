/*
* @Author: Administrator
* @Date:   2018-09-13 13:52:49
* @Last Modified by:   hxhhxrhxh
* @Last Modified time: 2018-11-01 22:17:04
*/

//页面加载
$(function(){
    //购物车
    $(".car").mouseenter(function() {
       $(".cart-boxs").clearQueue().slideDown();
    });
    $(".car").mouseleave(function() {
       $(".cart-boxs").clearQueue().slideUp();
    });

    
    //轮播图
    let imgBox=$(".banner .imgs img")
    let dosh=$(".home .dots ul li")
    imgBox.eq(0).css("opacity","1");
    dosh.eq(0).addClass('active2');
    let t=setInterval(move,2000);
    let now=0;
    function move(){
        
        now++;
        if(now==imgBox.length){
            now=0;
        }
        imgBox.css("opacity","0").eq(now).css("opacity","1");
        dosh.removeClass('active2').eq(now).addClass('active2');
    }
    $(".banner").mouseenter(function() {
        clearInterval(t);
    });
    $(".banner").mouseleave(function() {
        t=setInterval(move,1000);
    });
    //箭头
    $(".home .rightbtn").click(function(){
        move();
    })
    //左箭头
    function moveL(){
        now--;
        if(now<0){
            now=imgBox.length-1;
        }
        imgBox.css("opacity","0").eq(now).css("opacity","1");
        dosh.removeClass('active2').eq(now).addClass('active2');
    }
    // console.log($(".home .leftbtn"));
    $(".home .leftbtn").click(function(){
        moveL();
    })
    // 鼠标移入轮播点
    dosh.mouseenter(function() {
      let i=$(this).index();
       dosh.removeClass('active2').eq(i).addClass('active2');
       imgBox.css("opacity","0").eq(i).css("opacity","1");

    })

    

    //商品右侧栏
    let list=$(".list .select .xxk");
    let son1=$(".son");
    // console.log(list,son1);
    list.mouseenter(function() {
       let i=$(this).index();
       // console.log(i);
       son1.css("display","none").eq(i).css("display","block");
    });
    list.mouseleave(function() {
       let i=$(this).index();
       // console.log(i);
       son1.eq(i).css("display","none");
    });


     //闪购
    let leftbtn3=$(".shoppleft-list");
    let rightbtn3=$(".shoppright-list");
    let ul2=$(".light");
    let widths2=ul2.width();
    let w2=widths2/2;
    // console.log(leftbtn3,rightbtn3,ul2,widths2,w2);
    let time2=0;
    rightbtn3.click(function(){
        time2++;
        if(time2==2){
            time2=1;
        }
        ul2.css("transform",`translate(${(-w2*time2)}px)`);
    })
     leftbtn3.click(function(){
        time2--;
        if(time2==-1){
            time2=0;
        }
        ul2.css("transform",`translate(${(-w2*time2)}px)`);
    })




    //家电选项卡
    let parent=$(".electric li")
    // console.log(parent);
    let son=$(".bottom-right");
    // console.log(son);
    parent.eq(0).addClass('active');
    son.eq(0).css("zIndex","99");
    parent.mouseenter(function() {
        let i=$(this).index();
        console.log(i);
        son.css("zIndex","5").eq(i).css("zIndex","10");
        parent.removeClass('active').eq(i).addClass('active');
    });


     // //为你推荐
     let leftbtn4=$(".rleft-list");
    let rightbtn4=$(".rright-list");
    let ul1=$(".fresh");
    let w1=ul1.width()/3;
    let time1=0;
    rightbtn4.click(function(){
        time1++;
        if(time1==3){
            time1=2;
        }
        ul1.css("transform",`translate(${(-w1*time1)}px)`);
    })
    leftbtn4.click(function(){
        time1--;
        if(time1==-1){
            time1=0;
        }
        ul1.css("transform",`translate(${(-w1*time1)}px)`);
    })
   
 
    //  //内容轮播1
    // let content=$(".book .moveimg");
    // let dosh1=$(".book .dosh .dott");
    // let btnL=$(".book .Lbtn");
    // let btnR=$(".book .Rbtn");
    // let widths=content.width();
    // console.log(content);
    // let now1=next1=0;
    // content.eq(0).css("left","0");
    // dosh1.eq(0).addClass('hot3');
    //  function moveR() {
    //     next1++;
    //     if(next1==content.length){
    //         next1=0;
    //     }
    //     content.eq(now1).css("left","299px");   
    //     content.eq(now1).css("left","-299px");
    //     content.eq(next1).css("left","0");
    //     dosh1.eq(now1).removeClass('hot3');
    //     dosh1.eq(next1).addClass('hot3');
    //     now1=next1;
    // }
    //  btnL.click(function () {
    //     moveL();
    // })
    // btnR.click(function () {
    //     moveR();
    // })
 

    //  function moveL() {
    //     next1--;
    //     if(next1<0){
    //         next1=content.length-1;
    //     }
    //     content.eq(now1).css("left","299px");
    //     content.eq(now1).css("left","299px");    
    //     content.eq(next1).css("left","0");
    //     dosh1.eq(now1).removeClass('hot3');
    //     dosh1.eq(next1).addClass('hot3');
    //     now1=next1;
    // }

    // //   //内容轮播2
    // let content2=$(".topic .moveimg");
    // let dosh2=$(".topic .dosh .dott");
    // let btnL2=$(".topic .Lbtn");
    // let btnR2=$(".topic .Rbtn");
    // console.log(content2)
    // // let widths22=content2.width();
    // // console.log(content);
    // let now2=next2=0;
    // content2.eq(0).css("left","0");
    // dosh2.eq(0).addClass('hot3');
    //  function moveRR() {
    //     next2++;
    //     if(next2==content2.length){
    //         next2=0;
    //     }
    //     content2.eq(now2).css("left","299px");   
    //     content2.eq(now2).css("left","-299px");
    //     content2.eq(next2).css("left","0");
    //     dosh2.eq(now2).removeClass('hot3');
    //     dosh2.eq(next2).addClass('hot3');
    //     now2=next2;
    // }
    //  btnL2.click(function () {
    //     moveLL();
    // })
    // btnR2.click(function () {
    //     moveRR();
    // })
 

    //  function moveLL() {
    //     next2--;
    //     if(next2<0){
    //         next2=content2.length-1;
    //     }
    //     content2.eq(now2).css("left","299px");
    //     content2.eq(now2).css("left","299px");    
    //     content2.eq(next2).css("left","0");
    //     dosh2.eq(now2).removeClass('hot3');
    //     dosh2.eq(next2).addClass('hot3');
    //     now2=next2;
    // }
    
    //  //   //内容轮播3
    // let content3=$(".play .moveimg");
    // let dosh3=$(".play .dosh .dott");
    // let btnL3=$(".play .Lbtn");
    // let btnR3=$(".play .Rbtn");
    // console.log(content3)
    // // let widths22=content2.width();
    // // console.log(content);
    // let now3=next3=0;
    // content3.eq(0).css("left","0");
    // dosh3.eq(0).addClass('hot3');
    //  function moveRRR() {
    //     next3++;
    //     if(next3==content3.length){
    //         next3=0;
    //     }
    //     content3.eq(now3).css("left","299px");   
    //     content3.eq(now3).css("left","-299px");
    //     content3.eq(next3).css("left","0");
    //     dosh3.eq(now3).removeClass('hot3');
    //     dosh3.eq(next3).addClass('hot3');
    //     now3=next3;
    // }
    //  btnL3.click(function () {
    //     moveLLL();
    // })
    // btnR3.click(function () {
    //     moveRRR();
    // })
 

    //  function moveLLL() {
    //     next3--;
    //     if(next3<0){
    //         next3=content3.length-1;
    //     }
    //     content3.eq(now3).css("left","299px");
    //     content3.eq(now3).css("left","299px");    
    //     content3.eq(next3).css("left","0");
    //     dosh3.eq(now3).removeClass('hot3');
    //     dosh3.eq(next3).addClass('hot3');
    //     now3=next3;
    // }
   
    // //   //内容轮播4
    // let content4=$(".use .moveimg");
    // let dosh4=$(".use .dosh .dott");
    // let btnL4=$(".use .Lbtn");
    // let btnR4=$(".use .Rbtn");
    // console.log(content4)
    // // let widths22=content2.width();
    // // console.log(content);
    // let now4=next4=0;
    // content4.eq(0).css("left","0");
    // dosh4.eq(0).addClass('hot3');
    //  function moveRRRR() {
    //     next4++;
    //     if(next4==content4.length){
    //         next4=0;
    //     }
    //     content4.eq(now4).css("left","299px");   
    //     content4.eq(now4).css("left","-299px");
    //     content4.eq(next4).css("left","0");
    //     dosh4.eq(now4).removeClass('hot3');
    //     dosh4.eq(next4).addClass('hot3');
    //     now4=next4;
    // }
    //  btnL4.click(function () {
    //     moveLLLL();
    // })
    // btnR4.click(function () {
    //     moveRRRR();
    // })
 

    //  function moveLLLL() {
    //     next4--;
    //     if(next4<0){
    //         next4=content4.length-1;
    //     }
    //     content4.eq(now4).css("left","299px");
    //     content4.eq(now4).css("left","299px");    
    //     content4.eq(next4).css("left","0");
    //     dosh4.eq(now4).removeClass('hot3');
    //     dosh4.eq(next4).addClass('hot3');
    //     now4=next4;
    // }
    
   //倒计时
   //倒计时
    // let num=document.querySelectorAll(".timing .num");
    // // console.log(num);
   
    // let t5=setInterval(fn,1000);
    // function fn(){

    //    num.forEach((value,index)=>{
            
    //         value.innerHTML=move1()[index];
    //    })
    // }
    // fn();
    // function move1(){
    //     let date=new Date();
    //     let time5=new Date(2018,9,20);
    //     let timeafter=date.getTime();
    //     let timebefore=time5.getTime(2018,9,20);
    //     let timeing=Math.floor((timebefore-timeafter)/1000);
    //     // console.log(timeing);
    //     let arr=[];
    //     let hour=Math.floor(timeing%(30*24*60*60)%(60*60*24)/(60*60));
    //     let minute=Math.floor(timeing%(30*24*60*60)%(60*60*24)%(60*60)/60);
    //     let second=Math.floor(timeing%(30*24*60*60)%(60*60*24)%(60*60)%60);
    //     // console.log(hour,minute,second);
    //     arr.push(hour,minute,second);
    //     return arr;
    // }
    
        timemove();
    setInterval(timemove,1000)
    function timemove() {
        let newtime = new Date()
        let liss = document.querySelectorAll(".timing .num");
        let sa = newtime.getFullYear();
        let sb = newtime.getDate();
        let sc = newtime.getMonth();
        if (newtime.getHours() >= 15) {
            sb += 1;
        }
        // console.log(newtime);
        let nexttime = new Date(sa, sc, sb,15);
        let cha = Math.floor(nexttime.getTime() / 1000) - Math.floor(newtime.getTime() / 1000);
        console.log(cha);
        // console.log(nowtime.getTime());
        let newh = 0;
        let newf = 0;
        let newm = 0;
        let a = [];
        hour = Math.floor(cha / (60 * 60));
        fen = Math.floor(cha % (60 * 60) / 60);
        miao = Math.floor(cha % 60);
        if (Math.floor(hour / 10) == 0) {
            newh = "0" + hour;
        } else {
            newh = hour
        }
        a.push(newh)
        if (Math.floor(fen / 10) == 0) {
            newf = "0" + fen;
        } else {
            newf = fen
        }
        a.push(newf)

        if (Math.floor(miao / 10) == 0) {
            newm = "0" + miao;
        } else {
            newm = miao
        }
        a.push(newm)
        for (let i = 0; i < liss.length; i++) {
            liss[i].innerText = a[i]
        }
    }



    //返回顶部
    //返回顶部
    let back=$(".back");
    back.click(function(){
        animate((document.body),{scrollTop:0});
        animate((document.documentElement),{scrollTop:0});
    
    })


})


