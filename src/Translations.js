import Row from "./Row";

function Translations() {
  const translations = [
    { english: "Feature", latvian: "Funkcionalitāte jeb Funkcionālā iezīme" },
    { english: "Background", latvian: "Konteksts" },
    { english: "Scenario", latvian: "Scenārijs" },
    { english: "Scenario Outline", latvian: "Scenārijs pēc parauga" },
    { english: "Examples", latvian: "Piemēri" },
    { english: "Given", latvian: "Kad" },
    { english: "When", latvian: "Ja" },
    { english: "Then", latvian: "Tad" },
    { english: "And", latvian: "Un" },
    { english: "But", latvian: "Bet" },
    { english: "Or", latvian: "Vai" },
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        padding: "20px",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div>
        <h2 style={{ textAlign: "center" }}>Gherkin termini</h2>
        <table
          style={{
            borderCollapse: "collapse",
            width: "200pxpx",
            textAlign: "left",
          }}
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
          <tbody style={{ color: "white" }}>
            {translations.map((term, index) => (
              <Row key={index} term={term} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Translations;
