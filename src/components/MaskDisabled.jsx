export const MaskDisabled = () => {
  const BackgroundStyle = {
    top: -5, 
    left: -5, 
    right: -5, 
    bottom: -5, 
    position: "absolute", 
    backgroundColor: "rgba(167, 167, 167, 0.5)", 
    filter: "blur(6px)"
  }

  const TextStyle = {
    zIndex: 1, 
    position: "absolute", 
    top: "50%", 
    left: "50%", 
    transform: "translate(-50%, -50%)", 
    fontWeight: "bold"
  }
  
  return (
      <>
        <div style={BackgroundStyle}>
        </div>
        <div style={TextStyle}>
          LOCKED
        </div>
      </>
  );
};