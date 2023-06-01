import { basket } from "./cart";
 

const TOKEN = '6279094717:AAEINNI-WB8PTYW-nQglKgNdX6lALH6T6A0';
        const CHAT_ID = '-1001887598395';
        const URI_API = `https://api.telegram.org/bot${TOKEN}/sendMessage`;

bigForm = document.querySelector('.modal__form');
     console.log(bigForm);
    
    bigForm.addEventListener('submit', modalFormSubmit);


    
    
    function ban(event) {
    if(event.keyCode == 13) {
       event.preventDefault();
    }
    if(event.keyCode == 37) {
       event.preventDefault();
    }
    if(event.keyCode == 38) {
       event.preventDefault();
    }
    if(event.keyCode == 39) {
       event.preventDefault();
    }
    if(event.keyCode == 40) {
       event.preventDefault();
    }
 };
async function modalFormSubmit(event) {
    event.preventDefault();
    
    
    
    const formData = new FormData(event.currentTarget);
    formData.append('object', address.formatted_address);
    formData.append('basket', basket);

    console.log(formData);
  




    console.log(address.formatted_address);
    let error = formValidate(bigForm);
    
   
    

    if (formData) {
            }



        formData.forEach((x, y) => {
        console.log(x);
        console.log(y);
        
        
    });


    if (error === 0) {
      

       let messageToTg = `<b>New action</b>\n`;
    function sendMessage(){
       
            
            
        
        for (let entry of formData.entries()) {
            console.log(entry);

            if (entry[1] !='') {
                messageToTg += ` ${entry.join(" : ")}\n`;
                console.log(messageToTg);
            }

            
        }
        return messageToTg;
    };

    sendMessage();
        axios.post(URI_API, {
                    chat_id: CHAT_ID,
                    parse_mode: 'html',
                    text: messageToTg,
            });
    }

       // let response = await fetch('sendmail.php', {
			// 	method: 'POST',
			// 	body: formData
            // });
            
            // if (response.ok) {
			// 	let result = await response.json();
			// 	alert(result.message);
			// 	form.reset();
			// } else {
			// 	alert("Ошибка");
            // }
    
    
   
    
    

    // console.dir(event.currentTarget.elements.repairs.checked);
    
    function formValidate(bigForm) {
        let error = 0;
        let formReq = document.querySelectorAll('._req-big');
         console.log('gggg');
        

        for (let index = 0; index < formReq.length; index++) {
            const input = formReq[index];
            formRemoveError(input);

            if (input.classList.contains('_req-big-mail')) {
                if (emailTest(input)) {
                    formAddError(input);
                    error++;
                }
            }
            if (input.classList.contains('_req-big-tel')) {
                if (telTest(input)) {
                    formAddError(input);
                    error++;
                }
            } 
            else {
				if (input.value === '') {
					formAddError(input);
					error++;
				}
			}
        }
        return error;
    }

    function formAddError(input) {
        input.classList.add('_error');
        input.classList.add('_error');
    }
    function formRemoveError(input) {
        input.classList.remove('_error');
        input.classList.remove('_error');
    }


    function emailTest(input) {
        return !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,8})+$/.test(input.value);
    }
    function telTest(input) {
        return !/^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/.test(input.value);
    }





}

 