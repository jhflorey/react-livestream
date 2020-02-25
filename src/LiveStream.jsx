import React, { Component } from 'react'
import PlayConfig from "./PlayerConfig";

export default class LiveStream extends Component {
  render() {
    return (
      <div>
        <div id="livestream_wrapper">
          <video
            className="afterglow"
            id="livevideo"
            width="640"
            height="360"
            src="https://hls492585.r-cdn.com/trn_61802/1604/playlist.m3u8"
          ></video>
        </div>

        <PlayConfig />
      </div>
    )
  }
}
