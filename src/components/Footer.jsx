const Footer = ({ onSidebarToggle, data }) => {
  return (
    <footer>
      <div className="bgGradient"></div>
      <div>
        <h2>{data?.title}</h2>
        <h1>{data?.copyright}</h1>
      </div>
      <button onClick={() => onSidebarToggle()}>
        <i className="fa-solid fa-circle-info"></i>
      </button>
    </footer>
  );
};

export default Footer;
