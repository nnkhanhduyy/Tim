const form = document.querySelector('#create-account-form');
const usernameInput = document.querySelector('#username');
const titleInput = document.querySelector('#title');

form.addEventListener('submit', (event)=>{
    
    validateForm();
    console.log(isFormValid());
    if(isFormValid()==true){
        form.submit();
     }else {
         event.preventDefault();
     }

});

function isFormValid(){
    const inputContainers = form.querySelectorAll('.input-group');
    let result = true;
    inputContainers.forEach((container)=>{
        if(container.classList.contains('error')){
            result = false;
        }
    });
    return result;
} 

function validateForm() {
    //USERNAME
    if(usernameInput.value.trim()==''){
        setError(usernameInput, 'Điền họ tên bé vào!');
    }else if(usernameInput.value.trim()=='Nguyễn Lâm Kiều Trang' || usernameInput.value.trim()=='Nguyễn Lâm Kiều Trang'){
        setSuccess(usernameInput);
    }else {
        setError(usernameInput, 'Làm ơn điền đúng tên vợ tui cái:v');
    }
    //TITLE
    if(titleInput.value.trim()==''){
        setError(titleInput, 'Phải điền cả cái này nữa :v');
}else if(titleInput.value.trim()=='05/09/2020' || titleInput.value.trim()=='05/05/2020'){
        setSuccess(titleInput);
    }else {
        setError(titleInput, 'Ngày này mà cũm quên à (T_T)');
    }

}

function setError(element, errorMessage) {
    const parent = element.parentElement;
    if(parent.classList.contains('success')){
        parent.classList.remove('success');
    }
    parent.classList.add('error');
    const paragraph = parent.querySelector('p');
    paragraph.textContent = errorMessage;
}

function setSuccess(element){
    const parent = element.parentElement;
    if(parent.classList.contains('error')){
        parent.classList.remove('error');
    }
    parent.classList.add('success');
}





