import React from 'react';

export default function LpthJsxExpression() {
    //bien
    const name="Lê Phan Trung Hiếu";
    //bien doi tuong 
    const user= {
        firstname:"Hieu",
        lastname:"Le"
    }
//ham 
const fullname=(user)=>{
    return user.firstname + '' + user.lastname;
}
//element
const element =(
    <div> 
        {/*bieu thuc jsx */}
        <h2>{fullname(user)} </h2>
        <hr/>
        <h3> Welcome to, {name}</h3>
    </div>
);
//Ham
const saywelcome = (name)=>{
    if(name){
        return <h3> Welcome to {name} </h3>
    }
    else {
        return <h3> Welcome to FIT-NTU -K23CNT1</h3>
    } 
}
return (
    <div>
        <h1> LPTH- JSX Expression</h1>
        {/* su dung bien element */}
        {element}  {/* Đưa element vào JSX */}

        <hr/>
        {saywelcome()}
        <hr/>
        {saywelcome("Le Phan Trung Hieu")}
    </div>
)
}