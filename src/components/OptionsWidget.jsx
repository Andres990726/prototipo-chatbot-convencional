import PropTypes from "prop-types";

const OptionsWidget = ({ options = [], actionProvider }) => {
  const handleClick = (action) => {
    if (typeof actionProvider[action] === "function") {
      actionProvider[action]();
    } else {
      console.error(
        `La acción '${action}' no está definida en el ActionProvider.`
      );
    }
  };

  const buttonStyle = {
    padding: "10px 15px",
    backgroundColor: "#4caf50",
    color: "white",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    margin: "5px 0",
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      {options.map((option, index) => (
        <button
          key={index}
          style={buttonStyle}
          onClick={() => handleClick(option.action)}
        >
          {option.text}
        </button>
      ))}
    </div>
  );
};

OptionsWidget.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      text: PropTypes.string.isRequired,
      action: PropTypes.string.isRequired,
    })
  ).isRequired,
  actionProvider: PropTypes.object.isRequired,
};

export default OptionsWidget;
