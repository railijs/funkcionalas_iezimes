import Row from "./Row";

function Translations() {
  const translations = [
    { english: "Feature", latvian: "Funkcionalitāte" },
    { english: "Scenario", latvian: "Scenārijs" },
    { english: "Given", latvian: "Ievērojot" },
    { english: "When", latvian: "Kad" },
    { english: "Then", latvian: "Tad" },
  ];

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2 style={{ textAlign: "center" }}>Gherkin termini</h2>
      <table
        style={{ borderCollapse: "collapse", width: "100%", textAlign: "left" }}
      >
        <thead>
          <tr>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                background: "#f4f4f4",
              }}
            >
              Angļu valodā
            </th>
            <th
              style={{
                border: "1px solid #ddd",
                padding: "10px",
                background: "#f4f4f4",
              }}
            >
              Latviešu valodā
            </th>
          </tr>
        </thead>
        <tbody>
          {translations.map((term, index) => (
            <Row key={index} term={term} />
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Translations;
