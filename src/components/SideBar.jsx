const SideBar = ({ onSidebarToggle, data }) => {
  return (
    <div className="sidebar">
      <div className="bgOverlay"></div>
      <div className="sidebarContents">
        <h2>{data?.title}</h2>
        <div className="descriptionContainer">
          <p>{data?.date}</p>
          <p className="descriptionTitle">{data?.explanation}</p>
        </div>
        <button onClick={() => onSidebarToggle()}>
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    </div>
  );
};

export default SideBar;
