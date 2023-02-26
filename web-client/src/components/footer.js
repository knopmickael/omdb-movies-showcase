export function Footer() {
  return (
    <>
      <div
        className="responsiveGridLayoutItem"
        style={{
          background: '#222',
          gridColumn: 'span 16',
          height: '10vh'
        }}
      >
        <div className="container" style={{
          height: "100%",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}>
          <span style={{color: "#fff"}}>
            {new Date().toDateString()}
          </span>
          <img src="logo192.png" height="64"/>
        </div>
      </div>
    </>
  );
}
