var regmail = /^[A-Za-z0-9]+[A-Za-z0-9]*@[A-Za-z0-9]+(\\.[A-Za-z0-9]+)$/;

function checkMail(str) {
    if (regmail.test(str)){
        console.log("true")
    } else  {
        console.log("false")
    }
}