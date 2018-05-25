var me=this;

  if( ( this.tl - today ) > 0 ){
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">DAYS</div><span class="number day">'+day+'</span></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">HOURS</div><span class="number hour">'+hour+'</span></span>';
   timer += '<span class="number-wrapper"><div class="line"></div><div class="caption">MINS</div><span class="number min">'+this.addZero(min)+'</span></span><span class="number-wrapper"><div class="line"></div><div class="caption">SECS</div><span class="number sec">'+this.addZero(sec)+'</span></span>';
   this.elem.innerHTML = timer;
   tid = setTimeout( function(){me.countDown();},10 );
  }else{
   this.elem.innerHTML = this.mes;
   return;
  }
 },addZero:function(num){ return ('0'+num).slice(-2); }
}
function CDT(){


 var tl = new Date('2018/09/01 10:00:00');

 var timer = new CountdownTimer('CDT',tl,'<span class="number-wrapper"><div class="line"></div><span class="number end">Time is up!</span></span>');
 timer.countDown();
}
window.onload=function(){
 CDT();
}
