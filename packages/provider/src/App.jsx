import React from "react";
import AutoSizer from "react-virtualized-auto-sizer";

export default function App() {
  return (
    <AutoSizer>
      {({ width, height }) => {
        const style = { height, width };
        return <div style={style} />;
      }}
    </AutoSizer>
  );
}
