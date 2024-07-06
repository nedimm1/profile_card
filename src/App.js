import "./index.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function Avatar(prop) {
  return <img src={prop.link} alt="my profile" className="avatar"></img>;
}

function Intro(prop) {
  return <p>{prop.intro}</p>;
}

function SkillList() {
  return (
    <ul className="skill-list">
      {skills.map((mySkill, index) => {
        let dis = "";
        if (mySkill.level === "beginner") {
          dis = "👲";
        } else if (mySkill.level === "intermediate") {
          dis = "👍";
        } else if (mySkill.level === "advanced") {
          dis = "🦾";
        }
        return (
          <li className="skill" key={index}>
            <p style={{ backgroundColor: `${mySkill.color}` }}>
              {mySkill.skill} {dis}
            </p>
          </li>
        );
      })}
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
        <SkillList />
      </div>
    </div>
  );
}

export default App;
