const Shimmer = () => {
  return (
    <div className="restaurant-list">
      {Array(15)
        .fill("")
        .map((item, index) => (
          <div className="shimmer-card" key={index}></div>
        ))}
    </div>
  );
};

export default Shimmer;
