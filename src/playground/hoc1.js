import React from 'react';
import  ReactDOM from 'react-dom';


const Info = (props) => (
    <div>
        <h1>This is showing Info: {props.message}</h1>
    </div>
);

const hocDemo = (WrapperComponent) => {
    return (props) =>(
        <div>
            <h3>This is specail previlege method</h3>
            <WrapperComponent {...props}/>
        </div>
    );

}
const AdminInfo = hocDemo(Info); 

ReactDOM.render(<AdminInfo message ="put your life in hand of computer"/>,document.getElementById("app"));