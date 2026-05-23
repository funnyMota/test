var QRCode=require('qrcode');

QRCode.toString('i am a pony',{type:'terminal'},function(err,data){
  console.log(data);
})