import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <circle cx="132" cy="138" r="111" />
    <rect x="0" y="280" rx="0" ry="0" width="280" height="12" />
    <rect x="0" y="310" rx="5" ry="5" width="280" height="68" />
    <rect x="218" y="332" rx="0" ry="0" width="4" height="2" />
    <rect x="67" y="417" rx="0" ry="0" width="8" height="0" />
    <rect x="0" y="393" rx="0" ry="0" width="102" height="48" />
    <rect x="137" y="393" rx="19" ry="19" width="141" height="48" />
  </ContentLoader>
);

export default Skeleton;
