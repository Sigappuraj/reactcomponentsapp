import React, {Fragment} from "react";
import ReactDOM from "react-dom"

//creating React custom component like Name, App
const Name=(props)=><p>{props.title} {props.name}</p>

const App = () =>(
    <Fragment>
        {/* Fragment is React component */}
        <h1>Hello World</h1>
        <h2>welcome</h2>
        <Name title="Mr." name="sigappuraj"/>
        <Name title="Mr." name="Akilan"/>
    </Fragment>
);

//rendering custom component <App/>
ReactDOM.render(<App/>,document.querySelector("#app-root"))