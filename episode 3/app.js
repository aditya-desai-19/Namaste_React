import React from "react";
import ReactDOM from "react-dom/client";

//React element
const title = <h1>Namaste React🚀</h1>;

const SubHeading = () => (
    <div className="subheading">
        <h2>
            Namaste React🚀
        </h2>
    </div>
);

//React component
const Container = () => (
    <div className="container">
        {title}

        {/* different ways of rendering component */}
        {SubHeading()}
        <SubHeading />
        <h2>This is a container</h2>
    </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Container />);