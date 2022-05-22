import React from "react";
import SkeletonLoadingStyle from "./style";

const SkeletonLoading = ({ width = "100%", height = "20px", style = {} }) => {
    return (
        <SkeletonLoadingStyle
            style={{ ...style }}
            width={width}
            height={height}
        ></SkeletonLoadingStyle>
    );
};

export default SkeletonLoading;
