import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";

export default function VirtuApp() {
  return (
    <AutoSizer>
      {({ width, height }) => {
        const style = { height, width };
        return <div style={style} />;
      }}
    </AutoSizer>
  );
}
