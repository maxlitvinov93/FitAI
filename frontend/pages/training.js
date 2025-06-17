import { useState } from 'react';
import Chat from '../components/Chat';

export default function Training() {
  const [progress, setProgress] = useState(0);
  const markComplete = () => {
    setProgress(Math.min(progress + 20, 100));
  };

  return (
    <div>
      <h1>Today's Training</h1>
      <div className="progress-bar">
        <div className="progress" style={{ width: `${progress}%` }} />
      </div>
      <button onClick={markComplete}>Finish Exercise</button>
      <Chat />
    </div>
  );
}
