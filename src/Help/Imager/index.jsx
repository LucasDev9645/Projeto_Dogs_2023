import { useState } from "react";

import "./styles.css";

const Imager = ({ alt, ...props }) => {
  const [skeleton, setSkeleton] = useState(true);

  function handleLoad({ target }) {
    setSkeleton(false);
    target.style.opacity = 1;
  }

  return (
    <div className="wrapper">
      {skeleton && <div className="skeleton"></div>}
      <img onLoad={handleLoad} className="imgImager" {...props} alt={alt} />
    </div>
  );
};

export default Imager;
