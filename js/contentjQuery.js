/*
* @Author: Administrator
* @Date:   2018-09-14 08:36:19
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-14 08:37:34
*/
$(function(){
	//  //内容轮播1
    let content=$(".book .moveimg");
    let dosh1=$(".book .dosh .dott");
    let btnL=$(".book .Lbtn");
    let btnR=$(".book .Rbtn");
    let widths=content.width();
    console.log(content);
    let now1=next1=0;
    content.eq(0).css("left","0");
    dosh1.eq(0).addClass('hot3');
     function moveR() {
        next1++;
        if(next1==content.length){
            next1=0;
        }
        content.eq(now1).css("left","299px");   
        content.eq(now1).css("left","-299px");
        content.eq(next1).css("left","0");
        dosh1.eq(now1).removeClass('hot3');
        dosh1.eq(next1).addClass('hot3');
        now1=next1;
    }
     btnL.click(function () {
        moveL();
    })
    btnR.click(function () {
        moveR();
    })
 

     function moveL() {
        next1--;
        if(next1<0){
            next1=content.length-1;
        }
        content.eq(now1).css("left","299px");
        content.eq(now1).css("left","299px");    
        content.eq(next1).css("left","0");
        dosh1.eq(now1).removeClass('hot3');
        dosh1.eq(next1).addClass('hot3');
        now1=next1;
    }

    //   //内容轮播2
    let content2=$(".topic .moveimg");
    let dosh2=$(".topic .dosh .dott");
    let btnL2=$(".topic .Lbtn");
    let btnR2=$(".topic .Rbtn");
    console.log(content2)
    // let widths22=content2.width();
    // console.log(content);
    let now2=next2=0;
    content2.eq(0).css("left","0");
    dosh2.eq(0).addClass('hot3');
     function moveRR() {
        next2++;
        if(next2==content2.length){
            next2=0;
        }
        content2.eq(now2).css("left","299px");   
        content2.eq(now2).css("left","-299px");
        content2.eq(next2).css("left","0");
        dosh2.eq(now2).removeClass('hot3');
        dosh2.eq(next2).addClass('hot3');
        now2=next2;
    }
     btnL2.click(function () {
        moveLL();
    })
    btnR2.click(function () {
        moveRR();
    })
 

     function moveLL() {
        next2--;
        if(next2<0){
            next2=content2.length-1;
        }
        content2.eq(now2).css("left","299px");
        content2.eq(now2).css("left","299px");    
        content2.eq(next2).css("left","0");
        dosh2.eq(now2).removeClass('hot3');
        dosh2.eq(next2).addClass('hot3');
        now2=next2;
    }
    
     //   //内容轮播3
    let content3=$(".play .moveimg");
    let dosh3=$(".play .dosh .dott");
    let btnL3=$(".play .Lbtn");
    let btnR3=$(".play .Rbtn");
    console.log(content3)
    // let widths22=content2.width();
    // console.log(content);
    let now3=next3=0;
    content3.eq(0).css("left","0");
    dosh3.eq(0).addClass('hot3');
     function moveRRR() {
        next3++;
        if(next3==content3.length){
            next3=0;
        }
        content3.eq(now3).css("left","299px");   
        content3.eq(now3).css("left","-299px");
        content3.eq(next3).css("left","0");
        dosh3.eq(now3).removeClass('hot3');
        dosh3.eq(next3).addClass('hot3');
        now3=next3;
    }
     btnL3.click(function () {
        moveLLL();
    })
    btnR3.click(function () {
        moveRRR();
    })
 

     function moveLLL() {
        next3--;
        if(next3<0){
            next3=content3.length-1;
        }
        content3.eq(now3).css("left","299px");
        content3.eq(now3).css("left","299px");    
        content3.eq(next3).css("left","0");
        dosh3.eq(now3).removeClass('hot3');
        dosh3.eq(next3).addClass('hot3');
        now3=next3;
    }
   
    //   //内容轮播4
    let content4=$(".use .moveimg");
    let dosh4=$(".use .dosh .dott");
    let btnL4=$(".use .Lbtn");
    let btnR4=$(".use .Rbtn");
    console.log(content4)
    // let widths22=content2.width();
    // console.log(content);
    let now4=next4=0;
    content4.eq(0).css("left","0");
    dosh4.eq(0).addClass('hot3');
     function moveRRRR() {
        next4++;
        if(next4==content4.length){
            next4=0;
        }
        content4.eq(now4).css("left","299px");   
        content4.eq(now4).css("left","-299px");
        content4.eq(next4).css("left","0");
        dosh4.eq(now4).removeClass('hot3');
        dosh4.eq(next4).addClass('hot3');
        now4=next4;
    }
     btnL4.click(function () {
        moveLLLL();
    })
    btnR4.click(function () {
        moveRRRR();
    })
 

     function moveLLLL() {
        next4--;
        if(next4<0){
            next4=content4.length-1;
        }
        content4.eq(now4).css("left","299px");
        content4.eq(now4).css("left","299px");    
        content4.eq(next4).css("left","0");
        dosh4.eq(now4).removeClass('hot3');
        dosh4.eq(next4).addClass('hot3');
        now4=next4;
    }
    
})