// Assets
import dingPath from "../../../assets/sounds/ding_sound_effect.webm";

const sounds = {
  taskChecked: new Audio(dingPath),
  // Add More Sounds Here in need (soundName : new Audio(soundPath))
};

Object.values(sounds).forEach((sound) => sound.load());

export const playSound = (soundKey = "taskChecked") => {
  const audio = sounds[soundKey];

  if (audio == null) return;
  audio.currentTime = 0;
  audio.volume = 0.1;
  audio.play().catch((error) => {
    console.error("Error playing sound:", error);
  });
};
