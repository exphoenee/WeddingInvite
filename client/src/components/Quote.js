const Quote = () => {
  const content = {
    title: "Falling Slowly",
    authors: "Glen Hansard, Markéta Irglová",
    rows: [
      "“Nem ismerlek téged,",
      "de jobban akarlak,",
      "mint bármi mást.",
      "A szavak rám zuhannak,",
      "és bolonddá tesznek,",
      "és nem tudok mit tenni.",
      "És a játék, mit játszanak",
      "sosem lesz több mint amit",
      "önmaguknak jelentenek.",
      "Fogd ezt a süllyedő hajót,",
      "és vidd haza, míg van idő.",
      "Emeld fel reményteli hangod,",
      "mert a választás a tiéd.”",
    ],
  };

  return (
    <figure className="quote">
      <blockquote className="font-italic">
        <h5 className="mb-4 mt-2">{content.title}</h5>
        {content.rows.map((row) => (
          <p className="m-2">{row}</p>
        ))}
      </blockquote>
      <figcaption className="text-right">{content.authors}</figcaption>
    </figure>
  );
};

export default Quote;
