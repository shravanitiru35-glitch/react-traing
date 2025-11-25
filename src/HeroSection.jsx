function HeroSection(props) {
  return (
    <section style={{ padding: "40px", textAlign: "center", background: "#f0f0f0" }}>
      <h1>{props.heading}</h1>
      <p>{props.text}</p>
    </section>
  );
}

export default HeroSection;