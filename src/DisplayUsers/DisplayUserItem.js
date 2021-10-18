function DisplayUserItem(props) {
  return (
    <li>
      <p>{props.name}</p>
      <p>({props.age} years old)</p>
    </li>
  );
}

export default DisplayUserItem;
