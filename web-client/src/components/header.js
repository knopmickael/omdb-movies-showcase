export function Header() {
  return (
    <>
      <div
        className="responsiveGridLayoutItem"
        style={{
          background: "#222",
          gridColumn: "span 16",
          height: "10vh",
        }}
      >
        <div
          className="container"
          style={{
            height: "100%",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <img src="logo192.png" height="64" />
          <span style={{ color: "#fff", fontWeight: "bold" }}>
            OMDb Movies Showcase
          </span>
        </div>
      </div>
    </>
  );
}
