import Container from "react-bootstrap/Container";

const OurStory = () => {
  const content = {
    title: "Egyszer volt, hol nem volt …",
    details: [
      "…a pécsi Mecseken túl ott, ahol a kismalac már nem túr-fúr, élet egy fiú és leány. Hosszú évekig kollégák voltak. Együtt dolgoztak, ebédeltek,  kávézgattak, ha jó kedvük volt mókázgattak vagy a főnökökön bosszankodtak.",
      "Ám egy kora tavaszi délutánon valami megváltozott. A fiú és a lány érezték találkozniuk kell, mert valamit meg kell beszéljenek. A fiú váratlanul  színt vallott, a lány ekkor még elutasító volt. „Barátok maradunk” – megállapodtak.",
      "Történetük igazán csak itt kezdődik. Regénybe illő gondolatokkal tűzdelt levelezések, éjszakai villanykörte csere, hosszú séták, izgalmas, őszinte és mély beszélgetések. Egyre többet mutattak meg magukból egymásnak, észrevétlen lebontva a köztük lévő falat. Majd a lány nyaralni ment, és valami felerősödött. Hiába földrajzi távolság, paktum vagy a tudatos elhatározás, a lány rádöbbent, hogy ez valami más. Ő pont az, aki senki más! Eldöntötték próbaidőszak alá vetik magukat és megnézik, hogyan működne a közösen irányított „gépezet”.",
      "Így történt, hogy 2016. szeptember 5-én, egy fülledt nyári estén már kéz a kézben együtt léptek a közös életük mezejére. Azóta társak, és partnerek a gyereknevelésben, munkában, egymás karrierjében, kalandban, viccben, a komoly dolgokban, a tanulásban… egyszóval az Életben. Mondanánk, hogy itt a vége… de csak most jön a kezdet.",
    ],
  };

  return (
    <Container className="mt-5">
      <h3 className="mt-5">{content.title}</h3>
      {content.details.map((detail) => (
        <p>{detail}</p>
      ))}
    </Container>
  );
};

export default OurStory;
