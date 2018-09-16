/*
* @Author: Administrator
* @Date:   2018-09-13 13:52:49
* @Last Modified by:   Administrator
* @Last Modified time: 2018-09-16 16:49:53
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
   
 
 
    
   //倒计时
   //倒计时
    let num=document.querySelectorAll(".timing .num");
    // console.log(num);
   
    let t5=setInterval(fn,1000);
    function fn(){

       num.forEach((value,index)=>{
            
            value.innerHTML=move1()[index];
       })
    }
    fn();
    function move1(){
        let date=new Date();
        let time5=new Date(2018,12,20);
        let timeafter=date.getTime();
        let timebefore=time5.getTime(2018,12,20);
        let timeing=Math.floor((timebefore-timeafter)/1000);
        // console.log(timeing);
        let arr=[];
        let hour=Math.floor(timeing%(30*24*60*60)%(60*60*24)/(60*60));
        let minute=Math.floor(timeing%(30*24*60*60)%(60*60*24)%(60*60)/60);
        let second=Math.floor(timeing%(30*24*60*60)%(60*60*24)%(60*60)%60);
        // console.log(hour,minute,second);
        arr.push(hour,minute,second);
        return arr;
    }
    

})


