import Adding from "../Component/Adding";

const Hole = ({ username }) => {
  return (
    <div className="home-container">
      <Adding />
      <div className="grap-container">
        <div style={{ marginTop: "20px", marginBottom: "20px" }}>
          <h1>Hi {username} !</h1> <h3>Welcome to "Finance Mangement"</h3>
          <p>Discover the best Services tailored just for you.Easy to use,secure
          and designed to meet your needs. start exploring today!</p>
        </div>
      </div>
    </div>
  );
};

export default Hole;
