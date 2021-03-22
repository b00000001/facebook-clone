import React from "react";
import "./Widgets.css";

function Widgets(props) {
  return (
    <div className="widget__iframe">
      <iframe
        src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FCleverProgrammerr%2Fposts%2F1194987547570644&width=500&show_text=true&height=947&appId"
        width="560"
        height="100%"
        title="iframe"
        style={{
          border: "none",
          overflow: "hidden",
        }}
        scrolling="no"
        frameborder="0"
        allowfullscreen="true"
        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
        allowFullScreen="true"
      ></iframe>
    </div>
  );
}

export default Widgets;
