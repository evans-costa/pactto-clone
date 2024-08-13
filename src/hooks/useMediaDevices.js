import { useState, useEffect } from "react";

const useMediaDevices = () => {
  const [cameras, setCameras] = useState([]);
  const [microphones, setMicrophones] = useState([]);
  const [speakers, setSpeakers] = useState([]);

  useEffect(() => {
    async function getMediaDevices() {
      try {
        await navigator.mediaDevices.getUserMedia({
          audio: true,
          video: true,
        });

        const devices = await navigator.mediaDevices.enumerateDevices();
        const cameras = devices.filter(
          (device) => device.kind === "videoinput",
        );
        const microphones = devices.filter(
          (device) => device.kind === "audioinput",
        );
        const speakers = devices.filter(
          (device) => device.kind === "audiooutput",
        );

        setCameras(cameras);
        setMicrophones(microphones);
        setSpeakers(speakers);
      } catch (err) {
        console.error("Error enumerating devices:", err);
      }
    }

    getMediaDevices();
  }, []);

  return { cameras, microphones, speakers };
};

export default useMediaDevices;
