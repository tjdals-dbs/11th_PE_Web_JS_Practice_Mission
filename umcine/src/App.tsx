import { createContext, useContext, useState } from "react";
import { use } from "react";;

type StudyMode = "focus" | "break";

const StudyModeContext = createContext<StudyMode>("focus");

function StudyModeStatus() {
  const studyMode = use(StudyModeContext);

  return <p>현재 스터디 모드: {studyMode}</p>;
}

export default function App() {
  const [studyMode, setStudyMode] = useState<StudyMode>("focus");

  function handleToggleStudyMode() {
    setStudyMode((currentStudyMode) =>
      currentStudyMode === "focus" ? "break" : "focus"
    );
  }

  return (
    <StudyModeContext value={studyMode}>
      <StudyModeStatus />
      <button onClick={handleToggleStudyMode}>
        스터디 모드 바꾸기
      </button>
    </StudyModeContext>
  );
}