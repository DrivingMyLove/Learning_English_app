import React, { useState, useEffect, useRef } from "react";
import "../css/ChatInput.css";



const Button = () => {
    const [audioBlob, setAudioBlob] = useState(null);//dung
    // const [audioBlob, setAudioBlob] = useState(false);//sai
    const [transcript, setTranscript] = useState('');
    const [isRecording, setIsRecording] = useState(false);
    const [mediaRecorder, setMediaRecorder] = useState(null);
    const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    const recorder = new MediaRecorder(stream);
    const chunks = [];

    recorder.ondataavailable = e => chunks.push(e.data);
    recorder.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/webm' });
      setAudioBlob(blob);
    };

    recorder.start();
    setMediaRecorder(recorder);
    setIsRecording(true);
  };

  const stopRecording = () => {
    mediaRecorder.stop();
    setIsRecording(false);
  };

  const sendAudio = async () => {
    if (!audioBlob) return;
    const formData = new FormData();
    formData.append('file', audioBlob, 'audio.webm');

    const res = await fetch('http://localhost:3000/speech-to-text', {
      method: 'POST',
      body: formData,
    });
    const data = await res.json();
    setTranscript(data.text);
  };

  const sendMessage = async () => {
    const res = await fetch('http://localhost:3000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ message: transcript }),
    });
    const data = await res.json();
    alert('GPT says: ' + data.reply);
  };

    return (
        <div>
        {isRecording ? (
        <button id='send-button' onClick={stopRecording}>Stop Recording</button>
      ) : (
        <button id='send-button' onClick={startRecording}>Start Recording</button>
      )}
        <button id='send-button' onClick={sendAudio} disabled={!audioBlob}>Convert </button>
        <textarea
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
        rows="5"
        cols="50"
      ></textarea>
      <br />
      <button id='send-button' onClick={sendMessage} disabled={!transcript}>Send </button>
        {/* <div>Part 1</div> */}
        </div>
    );
};

export default Button;