import { useState } from "react";

const Login=()=>{
    const options = [
        {label:'Recruiter',value:'R'},
        {label:'Visitor',value:'V'}
      ];
    let [ddVal,setDdVal] = useState('S');
    let [ddLbl,setDdLbl] = useState('Select');
    const changeDropdownVal=e=>{
        setDdVal(e);
        if(e==='R'){
            setDdLbl('Recruiter');
        }else if(e==='V'){
            setDdLbl('Visitor');
        }else{
            setDdLbl('Select');
        }
    }
    const redirectToCV=()=>{

    }
    return(    
    <div className="card">
        <div className="card-body">
            <h5 className="card-title">You will be redirected to Ranadip's CV</h5>
            <h6 className="card-text">Please enter below details:</h6>
            <form className="row p-2" onSubmit={e=>redirectToCV()}>
                <div className="col"><label>Name:  </label> <input type="text"/></div>
                <div><label>Email ID:  </label> <input type="text"/></div>                
                <div className="dropdown">
                <label>I am : </label>
                    <button type="button" className="btn btn-secondary dropdown-toggle "data-bs-toggle="dropdown" aria-expanded="false" value={ddVal} >{ddLbl}</button>
                    <ul className="dropdown-menu">
                        {options.map(op=>(<li onClick={e=>changeDropdownVal(op.value)}><a value={op.value}>{op.label}</a></li>))}
                    </ul>
                </div>
                <button>Submit</button>
            </form>
        </div>
    </div> 
    );
}

export default Login;