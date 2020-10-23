import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const $appRoot = document.querySelector("#app-root");

const H1tag = React.createElement("h1", { className: "title" }, "Hello React");

// ReactDOM.render(H1tag, $appRoot)

const ListTag = React.createElement("div", { className: "container" },
    React.createElement("ul", {}, [
        React.createElement("li", { key: 0 }, "list one"),
        React.createElement("li", { key: 1 }, "list two")
    ])
);

// ReactDOM.render(ListTag, $appRoot);

const name = "sigappuraj";
const NameTag = <h1> Hi { name } </h1>;

// ReactDOM.render(NameTag, $appRoot);

const studentList = ["red", "naga", "akilan"]

const StudentListTag = (
     <ul> {
        studentList.map((student,index) => {
            return <li key={index}> { student } </li>
        })
    }
     </ul>
);
// ReactDOM.render(StudentListTag, $appRoot);

const AdjacentTag = (
    <Fragment>
        <h1> Hi { name } </h1>
        <h2>welcome</h2>
    </Fragment>
);

ReactDOM.render(AdjacentTag, $appRoot);