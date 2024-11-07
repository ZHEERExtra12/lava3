const btnSend=document.querySelector(".btn-send")
const inputMsg=document.querySelector(".problem-mess")
btnSend.addEventListener("click",function(){
          if(inputMsg.value===""){
                    reportError
          } 
                    
          else{
          const sentMsg = document.createElement("p");
          sentMsg.textContent = "the message was sent successfully";
          sentMsg.classList.add("pa-sent");
          document.querySelector(".problem").appendChild(sentMsg);
          setTimeout(function(){
                    sentMsg.remove()
          },3000);
          }

})
