import React from "react";
import ReactDOM from "react-dom/client";

const container = React.createElement("div", { id: "parent" }, [
    React.createElement("div", { id: "child1" }, [
        React.createElement("p", {}, "I'm a para1"),
        React.createElement("p", {}, "I'm a para2")]),
    React.createElement("div", { id: "child2" }, [
        React.createElement("p", {}, "I'm a para1"),
        React.createElement("p", {}, "I'm a para2")])
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(container);