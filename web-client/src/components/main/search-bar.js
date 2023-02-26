import { Title, Button, Text, Input } from "@ui5/webcomponents-react";

export function SearchBar() {
  return (
    <>
      <div
        style={{
          textAlign: "center",
          height: "30%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Title style={{color: "#61DAFB"}}>
          Search
        </Title>

        <Text className="py" style={{color: "white"}}>
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </Text>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          
          <Input placeholder="Item 4" style={{ marginRight: "15px" }} />

          <Button
            onClick={function noRefCheck() {}}
            style={{
              marginRight: "15px",
              background: "#61DAFB",
              border: "none"
            }}
          >
            <span style={{ padding: "25px", color: "black", fontWeight: "bold" }}>Search</span>
          </Button>

          <Button
            onClick={function noRefCheck() {}}
            style={{
              marginRight: "15px",
              background: "#61DAFB",
              border: "none"
            }}
          >
            <span style={{ padding: "25px", color: "black", fontWeight: "bold" }}>Reset</span>
          </Button>
          
        </div>
      </div>
    </>
  );
}
