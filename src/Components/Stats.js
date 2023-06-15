export default function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>
          Start adding some items on your packing
          list
        </em>
      </footer>
    );

  const numItems = items.length;
  const numPacked = items.filter(
    (item) => item.packed
  ).length;
  const percPacked = Math.round(
    (numPacked / numItems) * 100
  );

  return (
    <footer className="stats">
      <em>
        {percPacked === 100
          ? "You got everything ready to go ✈️"
          : `💥 You have ${numItems} items on your list, and you have already packed ${numPacked}(${percPacked}%) 💥`}
      </em>
    </footer>
  );
}
