import "./index.css";

function Avatar(prop) {
  return <img src={prop.link} alt="my profile" className="avatar"></img>;
}

function Intro(prop) {
  return <p>{prop.intro}</p>;
}

function SkillList(prop) {
  return (
    <ul className="skill-list">
      <li className="skill" style={{ backgroundColor: `${prop.color}` }}>
        {prop.description}
      </li>
    </ul>
  );
}

function App() {
  return (
    <div className="card">
      <Avatar link="my.jpg" />
      <div className="data">
        <Intro intro="dsdsfdasffffffffdassadsf"></Intro>
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList color="blue" description="Ex game developer🎮❌" />
      </div>
    </div>
  );
}

export default App;
