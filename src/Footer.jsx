function Footer(props) {
  return (
    <footer style={{ background: "#333", padding: "10px", color: "white", textAlign: "center" }}>
      <p>© {props.year} My React Website — All Rights Reserved</p>
    </footer>
  );
}

export default Footer;