//creating element using React 
// const heading = React.createElement("h1", {id:"heading"}, "Hello World from React");

//creating complex structure using React
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