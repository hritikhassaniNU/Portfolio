// Full-screen intro preloader. The animation (counter, neural canvas, curtain)
// is driven by initHome() in lib/homeScript.ts, which targets these IDs.
export default function Preloader() {
  return (
    <div className="preloader" id="preloader">
      <div className="pl-panels">
        <span />
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
      <canvas className="pl-canvas" id="plCanvas" />
      <div className="pl-center">
        <div className="pl-name">HRITIK HASSANI</div>
        <div className="pl-count">
          <span id="plNum">0</span>%
        </div>
        <div className="pl-track">
          <span id="plFill" />
        </div>
        <div className="pl-status">
          <span id="plStatus">initializing systems</span>
          <i className="pl-cur" />
        </div>
      </div>
    </div>
  );
}
