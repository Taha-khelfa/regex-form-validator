// validation script here
$(document).ready(function(){
    //add username
    $('#username').keyup(function(){
        let regname = /^[a-z0-9]{5,12}$/gi;
       check('#username',regname);
    })
    // mail
    $('#email').keyup(function(){
        let regMail = /^\S+@\S+\.\S+$/gi;
        check('#email',regMail);
    })
    //password
    //^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$
    $('#password').keyup(function(){
        let regPass = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{5,12}$/gi;
        check('#password',regPass);
    })
    //phone Number
    $('#phone').keyup(function(){
        let regPhone = /00216\d{8}$/gi;
        check('#phone',regPhone);
    })
    //card Number
    $('#card').keyup(function(){
        let regCard =  /(\d{2})(?:,|$)/g;
        check('#card',regCard);
    })
    
})
function check(id,reg){
    let result= $(id).val();
    if(reg.test(result)){
        $(id).removeClass('unpass').addClass('pass')
     }else{
        $(id).addClass('unpass')
        
    }
}