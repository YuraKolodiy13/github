export const Loader = () => (
  <div className="loadingio-spinner-blocks-c61cmfbkbvr">
    <div className="ldio-ns6zlcvpnm">
      <div style={{left: '38px', top: '38px', animationDelay: '0s'}}/>
      <div style={{left: '80px', top: '38px', animationDelay: '0.125s'}}/>
      <div style={{left: '122px', top: '38px', animationDelay: '0.25s'}}/>
      <div style={{left: '38px', top: '80px', animationDelay: '0.875s'}}/>
      <div style={{left: '122px', top: '80px', animationDelay: '0.375s'}}/>
      <div style={{left: '38px', top: '122px', animationDelay: '0.75s'}}/>
      <div style={{left: '80px', top: '122px', animationDelay: '0.625s'}}/>
      <div style={{left: '122px', top: '122px', animationDelay: '0.5s'}}/>
    </div>
    <style jsx>
      {`
      @keyframes ldio-ns6zlcvpnm {
        0% { background: #f8b26a }
        12.5% { background: #f8b26a }
        12.625% { background: #e15b64 }
        100% { background: #e15b64 }
      }
      .ldio-ns6zlcvpnm div {
        position: absolute;
        width: 40px;
        height: 40px;
        background: #e15b64;
        animation: ldio-ns6zlcvpnm 1s linear infinite;
      }
      .loadingio-spinner-blocks-c61cmfbkbvr {
        width: 200px;
        height: 200px;
        display: flex;
        margin: auto;
        overflow: hidden;
        background: #ffffff;
      }
      .ldio-ns6zlcvpnm {
        width: 100%;
        height: 100%;
        position: relative;
        transform: translateZ(0) scale(1);
        backface-visibility: hidden;
        transform-origin: 0 0; /* see note above */
      }
      .ldio-ns6zlcvpnm div { box-sizing: content-box; }
      `}
    </style>
  </div>
);