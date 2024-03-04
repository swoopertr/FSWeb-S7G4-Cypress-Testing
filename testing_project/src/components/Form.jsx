import React, {useState} from 'react';

const Form = () => {

    const [formData, setFormData]= useState({
        txtName:'',
        txtEmail:'',
        txtPassword:'',
        chckBox: false
     })
    const [errorMessage, setErrorMessage] = useState('');
    

    const OnChange =(event) =>{
       
       let valueCather = event.target.type === "checkbox" ? event.target.checked : event.target.value;
       let nameCatcher = event.target.name;
       
       setFormData ({
        ...formData,[nameCatcher]:valueCather
        });
        console.log(formData);
       
        // const {name, value}=event.target;
        // setFormData ({
        // ...formData,[name]:value
        // });
        
    }

   const OnSubmit =(event) =>{
        event.preventDefault();
        const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        const checkboxCatcher = document.getElementsByName("chckBox")[0];
        if(formData.txtName.length < 1 ){
            setErrorMessage("isim girilmedi")
            return;
        } else if (emailRegex.test(formData.txtEmail) === false) {
            setErrorMessage("e-posta formatı doğru değil")
            return;
        } else if(formData.txtPassword.length < 1) {
            setErrorMessage("şifre girilmedi")
            return;
        }else if(checkboxCatcher.checked === false ) {
            setErrorMessage("Kullanım koşullarını kabul eder misin canım benim")
            return;
        }
        
        setErrorMessage("")
        setFormData({
            txtName:'',
            txtEmail:'',
            txtPassword:'',
            chckBox: false
        });
        console.log("formu gönder")
    
    }
    return(
        <>
            <form onSubmit={OnSubmit}>
                <div>
                    <label htmlFor="txtName" >İsim:
                    <input type="text" name="txtName" placeholder='Enter your name' value={formData.txtName} onChange={OnChange} required />
                    </label>
                </div>
                <div>
                    <label htmlFor="txtEmail">Email:
                    <input type="email" name="txtEmail" placeholder='Enter your email' value={formData.txtEmail} onChange={OnChange} required/> 
                    </label>
                </div>
                <div>
                    <label htmlFor="txtPassword">Şifre:
                    <input type="password" name="txtPassword" placeholder='Enter your password' onChange={OnChange} value={formData.txtPassword} required/>
                    </label>
                </div>
                <div>
                    <label htmlFor="chckBox">TermsAndConditions:
                    <input type="checkbox" name="chckBox" onChange={OnChange} checked={formData.chckbox}/>
                    </label>
                </div>
                <button name="btnSubmit" type='Submit' >Gönder</button>
            </form>
            {errorMessage && errorList.map(x=><span id={'errItem_'+x.FieldName}>{x.FieldValue}</span>) }
        </>
    )
}
//https://24mzwmm3-5173.euw.devtunnels.ms/

export default Form 
