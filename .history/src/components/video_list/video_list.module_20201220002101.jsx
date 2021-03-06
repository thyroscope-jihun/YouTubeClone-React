import React from 'react';
import VideoItem from '../video_items/video_item.module';
import styles from './video_list.module.css'


const VideoList = (props) => (
    <ul className={styles.ul}>
        {props.video.map(video =><VideoItem key={video.id}  video={video}/> )}
        </ul>);

export default VideoList;