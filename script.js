var taplinks = document.getElementsByClassName("tap-links");
var tapcontents = document.getElementsByClassName("tab-contain");
        
        function opentab(tabname){
            for(taplink of taplinks){
                taplink.classList.remove("active-link");
            }
            for(tapcontent of tapcontents){
                tapcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");

        }

var sidemenu = document.getElementById("side-menu");
        function openmenu(){
            sidemenu.style.right= "0";
        }
        function closemenu(){
            sidemenu.style.right= "-200px";
        }

const scriptURL = 'https://script.google.com/macros/s/AKfycbz7bN4BIsBxq2AAr3qzggbpwGS-YmovZdoS8__bKtYPM5bumLbB6eoO6sSfuCSa8n-5/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")

form.addEventListener('submit', e => {
          e.preventDefault()
          fetch(scriptURL, { method: 'POST', body: new FormData(form)})
            .then(response => {
                msg.innerHTML="Massage sent successfully"
                setTimeout(function(){
                    msg.innerHTML=""
                },5000)
                form.reset()
            })
            .catch(error => console.error('Error!', error.message))
        })