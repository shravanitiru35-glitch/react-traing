function AboutSection(props) {
  return (
    <section style={{ padding: "30px" }}>
      <h2>About Me</h2>
      <p>Hi! I'm {props.name} and I love {props.hobby}.</p>
    </section>
  );
}

export default AboutSection;