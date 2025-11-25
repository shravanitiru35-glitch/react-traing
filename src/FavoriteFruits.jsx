function FavoriteFruits() {
  const fruits = ["Apple", "Banana", "Cherry"];
  const favorite = "Banana";

  return (
    <ul>
      {fruits.map((fruit) => (
        <li style={{ fontWeight: fruit === favorite ? "bold" : "normal" }} key={fruit}>
          {fruit}
        </li>
      ))}
    </ul>
  );
}

export default FavoriteFruits;