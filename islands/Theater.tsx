import { useCallback, useRef } from "preact/hooks";
import { PlayerHandler, YouTubePlayer } from "fresh-youtube-player";
import { JSX } from "preact";

import lazy from "preact-lazy";

function Theater({ className }: JSX.HTMLAttributes<HTMLElement>) {
  const playerHandler = useRef<PlayerHandler>();

  const onPlayerReady = useCallback(() => {
    playerHandler.current?.playVideo();
  }, []);

  return (
    <div className={className}>
      <YouTubePlayer
        width={450}
        height={390}
        videoId={"ynGDM2D1Z48"}
        playerVars={{ mute: 0 }}
        playerHandler={playerHandler}
        onPlayerReady={onPlayerReady}
      />
    </div>
  );
}

export default function LazyTheater(
  { className }: JSX.HTMLAttributes<HTMLElement>,
) {
  return lazy(() => <Theater className={className} />, <div>loading...</div>);
}
