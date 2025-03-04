import React from "react";
import SpeechRecognition, {
  useSpeechRecognition,
} from "react-speech-recognition";

const Dictaphone = () => {
  const {
    transcript,
    listening,
    resetTranscript,
    browserSupportsSpeechRecognition,
    isMicrophoneAvailable,
  } = useSpeechRecognition();

  // 用户拒绝使用麦克风
  if (!isMicrophoneAvailable) {
    alert("请打开权限");
  }
  //   浏览器不支持
  if (!browserSupportsSpeechRecognition) {
    return <span>浏览器不支持</span>;
  }
  const start = () => {
    if (isMicrophoneAvailable) {
      SpeechRecognition.startListening({ continuous: true, language: "zh-CN" });
    } else {
      alert("出错了");
    }
  };
  const stop = () => {
    SpeechRecognition.stopListening();
  };
  const reset = () => {
    resetTranscript();
  };
  return (
    <div>
      <p>Microphone: {listening ? "on" : "off"}</p>
      <button onClick={() => start()}>Start</button>
      <button onClick={() => stop()}>Stop</button>
      <button onClick={reset}>Reset</button>
      <p>{transcript}</p>
    </div>
  );
};
export default Dictaphone;
