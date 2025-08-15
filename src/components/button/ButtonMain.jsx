import ButtonText from "./ButtonText";

export default function ButtonMain({ text, onClick }) {
  const styles = {
    width: "214px",
    height: "38px",
    padding: "12px 20px",
    borderRadius: "4px",
    border: "none",
    backgroundColor: "#F28D35",
    color: "white",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
    gap: "8px",
  };

  return (
    <button style={styles} onClick={onClick}>
      <ButtonText text={text} />
    </button>
  );
}
