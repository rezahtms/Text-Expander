import { useState } from "react";
import "./App.css";

function App() {
  return (
    <div className="App">
      <TextExpander
        collapsedNumWords={100}
        expandedButtonText="Show Text"
        collapseButtonText="collapse Text"
        buttonColor="#ff6622"
        expanded={false}
        className="box"
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </TextExpander>
    </div>
  );
}

const TextExpander = ({
  children,
  collapsedNumWords = 10,
  expandedButtonText = "show more",
  collapseButtonText = "show Less",
  buttonColor = "#1f09cd",
  className = "",
  expanded = false,
}) => {
  const [isExpanded, setIsExpanded] = useState(expanded);
  const handleExpander = () => {
    setIsExpanded((current) => !current);
  };

  return (
    <div className={className}>
      <span>
        {isExpanded ? children : children.substr(0, collapsedNumWords) + "..."}
      </span>
      <button style={{ color: buttonColor }} onClick={handleExpander}>
        {isExpanded ? collapseButtonText : expandedButtonText}
      </button>
    </div>
  );
};
export default App;
