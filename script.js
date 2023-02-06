const statusBtn = document.querySelector('.statusButton');
const input = document.querySelector('input');
const buttton = document.querySelector('button')
const qrcodeDiv = document.getElementById('qrcode')
const choice = document.querySelector('.choice')
statusBtn.value = localStorage.getItem('lang')
let textValue = "";
let prefixes = "";


statusBtn.addEventListener("change", function (event) {
    localStorage.setItem('lang',event.target.value)
    let a = event.target.value;
   if ( a == "geo" ) {
        prefixes = "geo:"
   }
    if ( a == "tel") {
        prefixes = "tel:"
    }
   if (statusBtn.value == "url") {
        prefixes = "http://"
   }
   if (statusBtn.value == "email") {
         prefixes = "mailto:"
   }
   if (statusBtn.value == "text") {
        prefixes = ""
    }
    if(statusBtn.value == "whatsapp" ){
        prefixes = "https://api.whatsapp.com/send?phone="
    }
      
   console.log(a);
    restart()
})

function restart() {
    choice.innerText = statusBtn.value
}
restart()

input.addEventListener("input", function (event) {
    qrcodeDiv.title = event.target.value
    
})


buttton.addEventListener("click", function () {
    console.log(prefixes);
    textValue = input.value;
    const canvas = document.querySelector('canvas');
    const img = document.querySelector('img');
    if(qrcodeDiv.title != "" ){
        new QRCode(document.getElementById("qrcode"),prefixes + textValue);
        img?.remove();
        canvas?.remove();
    }

})




