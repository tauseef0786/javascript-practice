const list = ["Apple", "Banana", "Cherry"];
const element = (
  <ul>
    {list.map(item => (
      <li>{item}</li>
    ))}
  </ul>
);
ReactDOM.createRoot(document.getElementById("root")).render(element);
