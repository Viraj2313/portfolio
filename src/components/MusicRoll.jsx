import React, { useEffect, useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const tracks = [
  { title: "Master of None", artist: "Beach House", spotifyId: "3stWWPN41byqp8loPdy92u", appleId: "1248058067", appleUrl: "https://music.apple.com/us/song/1248058067", color: "#bc7650" },
  { title: "The Color Violet", artist: "Tory Lanez", spotifyId: "3azJifCSqg9fRij2yKIbWz", appleId: "1719899614", appleUrl: "https://music.apple.com/us/song/1719899614", color: "#9a7aba" },
  { title: "her", artist: "JVKE", spotifyId: "6G9YlbU3ByPJQvOFDRdwyM", appleId: "1764940884", appleUrl: "https://music.apple.com/us/song/1764940884", color: "#608781" },
  { title: "Beautiful", artist: "Akon", spotifyId: "1GLx5tpDdwEFiA7KaikvX2", appleId: "1555536000", appleUrl: "https://music.apple.com/us/song/1555536000", color: "#bd9b59" },
  { title: "Sweater Weather", artist: "The Neighbourhood", spotifyId: "2QjOHCTQ1Jl3zawyYOpxh6", appleId: "635016640", appleUrl: "https://music.apple.com/us/album/sweater-weather/635016635?i=635016640", color: "#60717b" },
];

const MusicRoll = () => {
  const [selected, setSelected] = useState(0);
  const [catalogTracks, setCatalogTracks] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const track = tracks[selected];
  const catalogTrack = catalogTracks[track.appleId];
  const artwork = catalogTrack?.artworkUrl100?.replace(/100x100/, "600x600") || "";

  const selectTrack = (index) => {
    setSelected(index);
  };

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    const ids = tracks.map((item) => item.appleId).join(",");
    fetch(`https://itunes.apple.com/lookup?id=${ids}`, { signal: controller.signal })
      .then((response) => {
        if (!response.ok) throw new Error("Track lookup failed");
        return response.json();
      })
      .then(({ results = [] }) => {
        const found = Object.fromEntries(results.filter((item) => item.trackId).map((item) => [String(item.trackId), item]));
        setCatalogTracks(found);
      })
      .catch(() => {})
      .finally(() => {
        if (!controller.signal.aborted) setIsLoading(false);
      });
    return () => controller.abort();
  }, []);

  return (
    <section className="music-section" aria-labelledby="music-title">
      <div className="music-section-heading">
        <div><span className="music-eyebrow">A PERSONAL FREQUENCY / 04</span><h2 id="music-title">Songs on loop<span>.</span></h2></div>
        <p>A little soundtrack for the things I make.</p>
      </div>
      <div className="music-console">
        <div className="music-stage" style={{ "--track-accent": track.color }}>
          <svg className="music-wave-art" viewBox="0 0 1200 470" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
            <defs>
              <linearGradient id="wave-stroke" x1="0" x2="1"><stop stopColor="#718b83" stopOpacity=".08" /><stop offset=".48" stopColor="#718b83" stopOpacity=".56" /><stop offset="1" stopColor="#718b83" stopOpacity=".06" /></linearGradient>
              <radialGradient id="record-face"><stop stopColor="#53534a" /><stop offset=".72" stopColor="#24251f" /><stop offset="1" stopColor="#141510" /></radialGradient>
              <filter id="record-shadow" x="-.4" y="-.4" width="1.8" height="1.8"><feDropShadow dx="0" dy="22" stdDeviation="20" floodColor="#34352e" floodOpacity=".2" /></filter>
            </defs>
            <g className="music-waves" fill="none" stroke="url(#wave-stroke)" strokeWidth="1.25">
              <path d="M-30 242c90-112 142 112 232 0s142-112 232 0 142 112 232 0 142-112 232 0 142 112 232 0 142-112 232 0" />
              <path d="M-30 265c90-112 142 112 232 0s142-112 232 0 142 112 232 0 142-112 232 0 142 112 232 0 142-112 232 0" />
              <path d="M-30 219c90-112 142 112 232 0s142-112 232 0 142 112 232 0 142-112 232 0 142 112 232 0 142-112 232 0" />
              <path d="M-30 288c90-112 142 112 232 0s142-112 232 0 142 112 232 0 142-112 232 0 142 112 232 0 142-112 232 0" />
              <path d="M-30 196c90-112 142 112 232 0s142-112 232 0 142 112 232 0 142-112 232 0 142 112 232 0 142-112 232 0" />
              <path d="M-30 311c90-112 142 112 232 0s142-112 232 0 142 112 232 0 142-112 232 0 142 112 232 0 142-112 232 0" />
            </g>
            <g className="music-record" filter="url(#record-shadow)">
              <circle cx="593" cy="235" r="172" fill="url(#record-face)" />
              <circle cx="593" cy="235" r="158" fill="none" stroke="#77766a" strokeOpacity=".25" />
              <circle cx="593" cy="235" r="145" fill="none" stroke="#aaa99b" strokeOpacity=".18" />
              <circle cx="593" cy="235" r="131" fill="none" stroke="#aaa99b" strokeOpacity=".2" />
              <circle cx="593" cy="235" r="117" fill="none" stroke="#aaa99b" strokeOpacity=".18" />
              <circle cx="593" cy="235" r="102" fill="none" stroke="#aaa99b" strokeOpacity=".2" />
              <circle cx="593" cy="235" r="88" fill="none" stroke="#aaa99b" strokeOpacity=".18" />
              <circle cx="593" cy="235" r="73" fill="none" stroke="#aaa99b" strokeOpacity=".2" />
              <circle cx="593" cy="235" r="59" fill="#ddd9cc" />
              <circle cx="593" cy="235" r="4" fill="#373830" />
            </g>
            <g className="music-tonearm" fill="none" stroke="#77776e" strokeLinecap="round">
              <path d="M820 112v70c0 28-21 50-49 50h-13" strokeWidth="9" />
              <circle cx="820" cy="108" r="16" fill="#d6d3c9" strokeWidth="3" />
              <path d="m757 228-14 22" strokeWidth="5" />
              <circle cx="742" cy="251" r="5" fill="#5b5c53" stroke="none" />
            </g>
            <g className="music-artwork-frame" filter="url(#record-shadow)">
              <rect x="683" y="122" width="194" height="194" rx="7" fill="#faf8f0" />
              {artwork && <image href={artwork} x="691" y="130" width="178" height="178" preserveAspectRatio="xMidYMid slice" />}
              {!artwork && <rect x="691" y="130" width="178" height="178" rx="2" fill={track.color} />}
            </g>
          </svg>
          <div className="music-stage-caption"><span>{track.title}</span><span>{track.artist}</span></div>
          <div className="music-track-selector" aria-label="Choose a track">
            {tracks.map((item, index) => {
              const thumbnail = catalogTracks[item.appleId]?.artworkUrl100?.replace(/100x100/, "600x600") || "";
              return (
                <button key={item.appleId} className={`music-track-tile ${selected === index ? "active" : ""}`} type="button" onClick={() => selectTrack(index)} aria-pressed={selected === index} aria-label={`Play ${item.title} by ${item.artist}`}>
                  {thumbnail ? <img src={thumbnail} alt="" /> : <span style={{ background: item.color }}>{String(index + 1).padStart(2, "0")}</span>}
                </button>
              );
            })}
          </div>
        </div>
        <div className="music-player-panel">
          <div className="music-player-main">
            <div className="music-controls">
              <button type="button" onClick={() => selectTrack((selected + tracks.length - 1) % tracks.length)} aria-label="Previous track"><FaArrowLeft /></button>
              <button type="button" onClick={() => selectTrack((selected + 1) % tracks.length)} aria-label="Next track"><FaArrowRight /></button>
            </div>
          </div>
          <iframe
            key={track.spotifyId}
            className="spotify-track-embed"
            title={`${track.title} by ${track.artist} preview`}
            src={`https://open.spotify.com/embed/track/${track.spotifyId}?utm_source=generator&theme=0`}
            width="100%"
            height="152"
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          />
          <div className="music-player-footer">
            <span>{isLoading ? "Loading covers…" : "Preview"}</span>
            <a href={track.appleUrl} target="_blank" rel="noreferrer">OPEN TRACK ↗</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MusicRoll;
