import "./Header.css";
function Header(props) {
  const list = props.links.map((link) => (
    <div className="lg:px-5 px-2" key={link.id}>
      <a href={link.url === undefined ? "#" : link.url}>{link.name}</a>
    </div>
  ));
  return (
    <div className="sticky top-0 z-10 bg-white bg-opacity-90 grid lg:grid-cols-3 grid-cols-2 py-5 pb-5 px-5">
      <div className="col-start-1 flex lg:px-10 px-5 lg:text-2xl text-xl">
        SM
      </div>
      <div className="lg:col-start-3 cols-start-2 flex justify-end items-center">
        {list}
      </div>
    </div>
  );
}

export default Header;
