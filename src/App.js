import { useEffect, useRef, useState } from "react";
import vzhope from "./voices/vzhope.mp3";
import chin from "./voices/chin.mp3";
import nevzhope from "./voices/nevzhope.mp3";
import veronikasong from "./voices/veronika.mp3";
import myrep from "./voices/myrep.mp3";

function App() {
  const audioRef = useRef(null);

  const [zhopa, setZhopa] = useState(false);
  const [zhopaFalse, setZhopaFalse] = useState(false);
  const [zhopaChinese, setZhopaChinese] = useState(false);
  const [myRepery, setMyRepery] = useState(false);
  const [veronika, setVeronika] = useState(false);

  const [piskaValue, setPiskaValue] = useState("");
  const [songName, setSongName] = useState("");
  const variabels = ["в жопе", "не в жопе", "в веронике", "草泥马", "Вы кто такие ? ёп.."];

  useEffect(() => {
    if (
      piskaValue === "в жопе"
    ) {
      setZhopa(true);
      setMyRepery(false)
      setZhopaFalse(false)
      setZhopaChinese(false)
      setMyRepery(false)
      setVeronika(false)
      setSongName(vzhope);
    }
    if (
      piskaValue === "не в жопе"
    ) {
      setZhopa(false);
      setMyRepery(false)
      setZhopaFalse(true);
      setZhopaChinese(false)
      setMyRepery(false)
      setVeronika(false)
      setSongName(nevzhope);
    }
    if (piskaValue === "草泥马") {
      setZhopa(false);
      setMyRepery(false)
      setZhopaFalse(false);
      setZhopaChinese(true)
      setMyRepery(false)
      setVeronika(false)
      setSongName(chin);
    }
    if (piskaValue === "в веронике") {
      setZhopa(false);
      setMyRepery(false)
      setZhopaFalse(false);
      setZhopaChinese(false)
      setMyRepery(false)
      setVeronika(true)
      setSongName(veronikasong);
    }
    if (piskaValue === "Вы кто такие ? ёп..") {
      setZhopa(false);
      setMyRepery(false)
      setZhopaFalse(false);
      setZhopaChinese(false)
      setMyRepery(true)
      setVeronika(false)
      setSongName(myrep);
    }
  }, [piskaValue]);

  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.volume = 0.3;
    }
  }, [songName]);

  const playSong = (data) => {
    setPiskaValue(data);
    if (data.length == 0) audioRef.current.pause();
    if (data.length == 0) {
      setZhopa(false);
      setMyRepery(false)
      setZhopaFalse(false);
      setZhopaChinese(false)
      setMyRepery(false)
      setVeronika(false)
    }
  };

  const handleCanPlay = () => {
    if (audioRef.current && piskaValue) {
      audioRef.current.play();
    }
  };

  return (
    <>
      <div className="main__inner">
        <p className="title">Дайте состояние вашей письки, где она? В жопе или нет?</p>
        <div className="btn__inner">
          {variabels.map((data, index) => (
            <a key={index} onClick={() => playSong(data)} className="btn__main">
              {data}
            </a>
          ))}
          <a onClick={() => playSong("")} className="btn__main">
            Вы уверены ? епт (сброс)
          </a>
        </div>
        {zhopa ? <p className="title">Вам скоро станет заебиська</p> : <p></p>}
        {zhopaFalse ? <p className="title">Хряпни-ка висячку, браток !</p> : <p></p>}
        {zhopaChinese ? <p className="title">Я ебал твою телку У</p> : <p></p>}
        {veronika ? <p className="title">Могу скинуть инстаграм вероники</p> : <p></p>}
        {myRepery ? <p className="title">Нюхай хуй</p> : <p></p>}
      </div>
      <audio
        ref={audioRef}
        src={songName}
        preload="auto"
        onCanPlay={handleCanPlay}
      />
    </>
  );
}

export default App;
