import { Component, OnInit } from '@angular/core';
import * as RecordRTC from 'recordrtc';
import { DomSanitizer } from '@angular/platform-browser';
import { FormControl } from '@angular/forms';
import { MAX_RECORD_TIME, RECORD_BTN_IN_PROGRESS_MSG, RECORD_BTN_MSG } from '../../constants/feed.constants';

@Component({
  selector: 'app-post-submission',
  templateUrl: './post-submission.component.html',
  styleUrls: ['./post-submission.component.css']
})
export class PostSubmissionComponent implements OnInit {
  recordBtnText;

  description = new FormControl('');
  recording = false;
  recordingProgress = '0%'; 
  timerStarted = false;
  
  interval;
  timeLeft;

  ngOnInit(): void {
  }

  //Lets initiate Record OBJ
  private record;
  private stream;
  //Will use this flag for detect recording
  //Url of Blob
  url;
  private error;
  constructor(private domSanitizer: DomSanitizer) {
    this.recordBtnText = RECORD_BTN_MSG;
  }
  sanitize(url:string){
      return this.domSanitizer.bypassSecurityTrustUrl(url);
  }

  initiateRecording() {  
    let mediaConstraints = {
          video: false,
          audio: true
    };
    this.url = null;
    navigator.mediaDevices
      .getUserMedia(mediaConstraints)
      .then(this.startRecordingCallback.bind(this), this.errorCallback.bind(this)); 
  }
  /**
   * Will be called automatically.
   */
  startRecordingCallback(stream) {
    this.recording = true; 
    this.recordBtnText = RECORD_BTN_IN_PROGRESS_MSG;
    this.startRecordTimer();  
    
    this.stream = stream;

    var options = {
          mimeType: "audio/mp3",
          numberOfAudioChannels: 1
      };
      //Start Actual Recording
      var StereoAudioRecorder = RecordRTC.StereoAudioRecorder;
      this.record = new StereoAudioRecorder(stream, options);
      this.record.record();
  }
  /**
   * Stop recording.
   */
  stopRecording() {
      this.recording = false;
      this.resetRecorderUI();
      this.stream.getAudioTracks().forEach(track => track.stop());
      this.record.stop(this.processRecording.bind(this));
  }
  /**
   * processRecording Do what ever you want with blob
   * @param  {any} blob Blog
   */
  processRecording(blob) {
      this.url = this.sanitize(URL.createObjectURL(blob));
  }
  /**
   * Process Error.
   */
  errorCallback(error) {
      this.error = 'Can not play audio in your browser';
  }

  startRecordTimer() {
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
        this.recordingProgress = MAX_RECORD_TIME - this.timeLeft + '%';
      } else {
        if (this.timerStarted) {
          this.resetRecorderUI();
          this.stopRecording();
        } else {
          this.timerStarted = true;
          this.timeLeft = MAX_RECORD_TIME;
        }
      }
    },MAX_RECORD_TIME)
  }

  resetRecorderUI() {
    this.timerStarted = false;
    this.recordingProgress = '0%';
    this.recordBtnText = RECORD_BTN_MSG;
    this.timeLeft = 0;
    clearInterval( this.interval );
  }
}
