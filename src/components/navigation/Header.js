import "./Header.css";
function Header(props) {
  const list = props.links.map((link) => (
    <div className="header" key={link.id}>
      <a href={link.url === undefined ? "#" : link.url}>{link.name}</a>
    </div>
  ));
  return <div>{list}</div>;
}

export default Header;
