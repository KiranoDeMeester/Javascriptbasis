// Import our custom CSS
import '../scss/styles.scss'

// Import all of Bootstrap’s JS
import * as bootstrap from 'bootstrap'

// eigen JS

class AudioManager {
    static instance;

    constructor(){
        if(AudioManager.instance){
            return AudioManager.instance;
        }
        this.volume = 50;
        this.muted = false;
        AudioManager.instance = this;
    }

    setVolume(value){
        this.volume = Math.min(Math.max(value, 0), 100);
    }

    toggleMute(value){
        this.muted = value;
    }

    getVolume(){
        return this.volume;
    }

    isMuted(){
        return this.muted;
    }
}

const volumeSettings = new AudioManager();

function updateAudioPreview(){
    const audioIn = document.querySelector("#aud_volume");
    const audioOut = document.querySelector("#aud_out_volume");
    const isMuted = document.querySelector("#aud_out_muted");

    volumeSettings.setVolume(Number(audioIn.value));
    audioOut.textContent = volumeSettings.getVolume();

    console.log(volumeSettings.getVolume());
    console.log(volumeSettings.isMuted());

    if(volumeSettings.isMuted()){
        isMuted.textContent = "Muted";
    }
    else{
        isMuted.textContent = "Not Muted";
    }
}

function muteAudio(){
    if (volumeSettings.isMuted()){
        volumeSettings.toggleMute(false);
    }
    else{
        volumeSettings.toggleMute(true);
    }
}

// Event listeners
document.querySelector("#aud_btn_mute")
    .addEventListener("click", muteAudio);

document.querySelector("#aud_btn_show")
    .addEventListener("click", updateAudioPreview);
