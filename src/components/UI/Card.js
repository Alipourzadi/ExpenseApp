function Card(props) {
  const classes = "shadow-black/25 shadow-md rounded-xl " + props.className;
  return <div className={classes}>{props.children}</div>;
}

export default Card;
