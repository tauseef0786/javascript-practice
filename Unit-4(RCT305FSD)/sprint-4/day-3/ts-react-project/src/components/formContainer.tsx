import React, { useState } from "react";




interface FormInputData {
name : string ,
type : string,
value : string | number,
placeholder?:string,

}
// let arr :  FormInputData = [
//     {name : "username", type:"text" , value :""},
//     {name: "email" , type:"email" , value : ""},
//     {name: "phone", type: "number", value : ""}
//     ]

export const FormContainer : React.FC = ()=>{
    // FormFields
    let [FormField, setFormField] =useState <FormInputData[]>(
        [
            {name : "username",placeholder:"username", type:"text" , value :""},
            {name: "email" ,placeholder:"email", type:"email" , value : ""},
            {name: "phone",placeholder:"phone", type: "number", value : ""}
        ]
    )
    function HandleChange(e:any,i:number){
        console.log(e)
        let updateField = [...FormField]
        updateField[i].value = e. target.value
        setFormField(updateField)

    }
    function HandleSubmit(e: React.FormEvent): void {
        e.preventDefault();  // Prevent form from reloading the page
        const values = FormField.map(field => field.value);  // Extract only the values
        console.log(values);  // Log the array of values
    }
    
    return (
        <div>
            <form onSubmit={HandleSubmit}>
                {
                    FormField.map((ele,i)=>{
                        return(
                            <input name={ele.name}
                            type={ele.type}
                            value={ele.value}
                            onChange={(e)=>HandleChange(e , i)}
                            placeholder={ele.placeholder}/>
                        )
                    })
                }
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}