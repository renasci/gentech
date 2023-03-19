import React, { useRef, useEffect, useCallback } from 'react';
import Hls from 'hls.js';
import { useLocalStorage } from '../hook/useLocalStorage';
import { useParams } from 'react-router-dom';

export const Video = ({src, duration, id}) => {
  const {courseId} = useParams();
  const [courseProgress, setCourseProgress]  = useLocalStorage(courseId);
  const videoRef = useRef();
  
  let handleTimeUpdate = useCallback((() => {
    let isPaused = false;

    return () => {

      if(isPaused) {
        return;
      } else {
        isPaused = true;
        setTimeout(() => {
          isPaused = false;
        }, 2000);

        setCourseProgress((currentValue) => {
          if(typeof currentValue === "object" && currentValue !== null) {
            currentValue[id] = {
              completed : videoRef.current.currentTime + 10 >= duration,
              time: videoRef.current.currentTime
            }
            return currentValue;
          } else {
            return {
              [id] :{
                completed : videoRef.current.currentTime + 10 >= duration,
                time: videoRef.current.currentTime
              }
            };
          }
        });
      }
    }
   
  })(), [src]);

  useEffect(() => {
    const video = videoRef.current;
    const hls = new Hls();
    hls.loadSource(src);
    hls.attachMedia(video);

    if(typeof courseProgress === "object" && courseProgress !== null) {
      let savedTime = courseProgress[id] && courseProgress[id].time;
      videoRef.current.currentTime = savedTime ? savedTime : 0;
    }
    
    video.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      hls.destroy();
      video.removeEventListener('timeupdate', handleTimeUpdate);
    }
  }, [src]);

  const VideoStyle = {
    maxWidth: 500, 
    width: "100%"
  }
  return (
    <video style={VideoStyle} ref={videoRef} controls />
  );
};

