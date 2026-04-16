import PropTypes from "prop-types";

function List(props) {
  const category = props.category;
  const itemList = props.items;

  const listItems = itemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp;
      <b>{item.calories}</b>
    </li>
  ));

  return (
    <>
      <h2 className="list-category">{category}</h2>
      <ol className="list-items">{listItems}</ol>
    </>
  );
}
List.prototype = {
  category: PropTypes.string,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    }),
  ),
};
List.defaultProps = {
  category: "category",
  items: [],
};

export default List;
