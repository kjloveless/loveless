import { useCallback, useRef } from "preact/hooks";
import { PlayerHandler, YouTubePlayer } from "fresh-youtube-player";

export default function Theater() {
  const playerHandler = useRef<PlayerHandler>();

  const onPlayerReady = useCallback(() => {
    playerHandler.current?.playVideo();
  }, []);

  return (
    <div>
      <YouTubePlayer
        width={640}
        height={390}
        videoId={"ynGDM2D1Z48"}
        playerVars={{ mute: 1 }}
        playerHandler={playerHandler}
        onPlayerReady={onPlayerReady}
      />
    </div>
  );
}