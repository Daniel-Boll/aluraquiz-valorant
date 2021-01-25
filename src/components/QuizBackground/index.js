import db from "../../../db.json";

const QuizBackground = () => {
  return (
    <video
      style={{
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        objectFit: "cover",
        objectPosition: "center",
        zIndex: -1,
      }}
      loop={true}
      muted={true}
      autoPlay={true}
    >
      <source src={db.bg}></source>
    </video>
  );
};

export default QuizBackground;
