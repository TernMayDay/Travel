function getData(e) {
  //console.log(e);
  //console.log(e.result.records[0].Zone);
  var KAG = e.result.records; // 取得想要的陣列

  var ADarea = document.querySelector('.selectlist');
  var totalLIST = document.querySelector('.total');
  var btLIST = document.querySelector('.btlist');


/////////組一個不重複的選單 STAR /////////
  var newARRY=[];
    for(var i=0; i<KAG.length; i++){
      newARRY.push(KAG[i].Zone);
  }
  
  newARRY[0]='--請選擇行政區域--'; 
  // **設定預設值選項** -->//console.log(newARRY); // 所有都排出來看一下

  var result = Array.from(new Set(newARRY));
 // **獲取不重複的內容** --> //console.log(result); //[不重複值]
 // **不重複參考路徑 --> https://guahsu.io/2017/06/JavaScript-Duplicates-Array/

  // 網頁畫面塞入選單
  var select = document.querySelector('.selectlist');
  str="";
    for(var i=0; i<result.length;i++){
      str+= '<option>'+result[i]+'</option>' ;
    }
  select.innerHTML=str;

// console.log('total: '+result + '總數: '+result.length );
/////////組一個不重複的選單 EDN /////////


// 從下拉選單更新資料
function area(e){
  var titZone = document.querySelector('.tit');
  str="";
  for(var i=0;i<KAG.length;i++){
    if( e.target.value == KAG[i].Zone){

       str+='<div class="col-xs-12 col-sm-6"><div class="item"><div class="thumbnail"><div class="pic"><img src="'+KAG[i].Picture1+'" alt="'+KAG[i].Name+'" class="img-responsive center-block"></div><h3>'+KAG[i].Name+'</h3><h4>'+KAG[i].Zone+'</h4><div class="caption"><p><time>'+KAG[i].Opentime+'</time></p><p>'+KAG[i].Add+'</p><p><span itemprop="telephone"><a href="tel:'+KAG[i].Tel+'">'+KAG[i].Tel+'</a></span></p><p class="Ticke_tinfo">'+KAG[i].Ticketinfo+'</p></div></div></div></div>'

       titZone.textContent=KAG[i].Zone;
    }
  }
  totalLIST.innerHTML=str; 
 }


// 從li選單更新資料
function area2(e){
  var titZone = document.querySelector('.tit');
  str="";
  if( e.target.nodeName !== 'LI'){return}
    for(var i=0; i<KAG.length; i++){
       if( e.target.textContent == KAG[i].Zone ){
        
        str+='<div class="col-xs-12 col-sm-6"><div class="item"><div class="thumbnail"><div class="pic"><img src="'+KAG[i].Picture1+'" alt="'+KAG[i].Name+'" class="img-responsive center-block"></div><h3>'+KAG[i].Name+'</h3><h4>'+KAG[i].Zone+'</h4><div class="caption"><p><time>'+KAG[i].Opentime+'</time></p><p>'+KAG[i].Add+'</p><p><span itemprop="telephone"><a href="tel:'+KAG[i].Tel+'">'+KAG[i].Tel+'</a></span></p><p class="Ticke_tinfo">'+KAG[i].Ticketinfo+'</p></div></div></div></div>'
        
        titZone.textContent=KAG[i].Zone;
      }
  }
  totalLIST.innerHTML=str; 
}


ADarea.addEventListener('change',area,false)
btLIST.addEventListener('click',area2,false)


}