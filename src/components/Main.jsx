const Main = ({ data }) => {
  return (
    <div className="imgContainer">
      <img src={data.url} alt={data.title} className="bgImage" />
    </div>
  );
};

export default Main;
