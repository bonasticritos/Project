/* const wrapper = document.querySelector(".wrapper"),//gets the wrapper css and stores it in
qrInput=wrapper.querySelector(".form input"),//gets the form input css and stores it in th
qrimg=wrapper.querySelector(".qr-code img"),//gets the qr-code img and stores it in the qr
qrcodediv = wrapper.querySelector(".qr-code"),//gets the qr-code img and stores it in the qr
generateBtn=wrapper.querySelector(".form button");//gets the form button css and stores it
downloadqrbtn = wrapper.querySelector('.qr-code button') */


const qrdata = document.querySelector(".input-box-for-qrdata")
const qrsize = document.querySelector(".input-box-for-qrsize")
const qrgeneratebutton = document.querySelector(".generate-button")
const qrdownloadbutton = document.querySelector(".download-button")
const img = document.querySelector("img")
const loadmsg = document.querySelector(".loadingmessage")


   
   
   
   qrgeneratebutton.addEventListener("click",()=>{

        let qrvalue = qrdata.value;
        if(!qrvalue) return;

        loadmsg.hidden = false;

        qrgeneratebutton.classList.add('disabled')

        qrgeneratebutton.innerText= "Generating QR Code....";


        img.src = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrvalue)}`

        loadmsg.hidden = true;

        img.hidden=false;
        qrgeneratebutton.classList.remove('disabled')

        
        qrgeneratebutton.innerText= "Generate QR Code";

        

        

    })

    

   // Download QR

   qrdownloadbutton.addEventListener('click', () => qrdownload() )
   

    function qrdownload () {
       qrvalue = qrdata.value;

       img.src = `https://api.qrserver.com/v1/create-qr-code/?size=${qrsize}x${qrsize}&data=${encodeURIComponent(qrvalue)}`

       fetch(img.src)
       .then((response) => response.blob())
       .then((blob) => {
           const link = document.createElement("a");
           link.href = URL.createObjectURL(blob);
           link.download = `${qrvalue}-QRcode.png`;
           document.body.appendChild(link);
           link.click();
           document.body.removeChild(link);
        })
    }


   qrdata.addEventListener("keyup", ()=>{
       if (!qrdata.value) {
          img.hidden=true;
       }
   })


