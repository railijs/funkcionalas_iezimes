function Q3() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        padding: "20px",
      }}
    >
      <p style={{ fontSize: "20px", fontWeight: "bold" }}>
        3. Kā veidot scenārijus?
      </p>
      <ul style={{ listStyle: "none", padding: 0 }}>
        <li
          style={{
            backgroundColor: "#f0f0f0",
            padding: "10px",
            borderRadius: "5px",
          }}
        >
          Kad [nosacījums] Ja [tiek izsaukta darbība] Tad [ir gaidāms rezultāts]
        </li>
      </ul>
    </div>
  );
}

export default Q3;
