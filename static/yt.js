// Initial code: https://www.labnol.org/internet/youtube-audio-player/26740/
// https://developers.google.com/youtube/player_parameters
function onYouTubeIframeAPIReady() {
  const ctrlq = document.getElementById("youtube-audio");

  const icon = document.createElement("img");
  icon.setAttribute("id", "youtube-icon");
  icon.style.cssText = "cursor:pointer;cursor:hand";
  ctrlq.appendChild(icon);

  const div = document.createElement("div");
  div.setAttribute("id", "youtube-player"), ctrlq.appendChild(div);

  const toggleButton = function (play) {
    icon.setAttribute("src", "/logo.svg");
    icon.setAttribute("alt", "fresh icon to play/pause audio");
  };

  ctrlq.onclick = function () {
    player.getPlayerState() === YT.PlayerState.PLAYING ||
      player.getPlayerState() === YT.PlayerState.BUFFERING
      ? (player.pauseVideo(), toggleButton(!1))
      : (player.playVideo(), toggleButton(!0));
  };

  const player = new YT.Player("youtube-player", {
    height: "0",
    width: "0",
    videoId: ctrlq.dataset.video,
    playerVars: {
      autoplay: ctrlq.dataset.autoplay,
      loop: ctrlq.dataset.loop,
    },
    events: {
      onReady: function (e) {
        player.setPlaybackQuality("small"),
          toggleButton(player.getPlayerState() !== YT.PlayerState.CUED);
      },
      onStateChange: function (e) {
        ctrlq.data === YT.PlayerState.ENDED && toggleButton(!1);
      },
    },
  });
}
