import React from "react";
import { skills } from "../../data/skills";
import "./Skills.css";

const Skills = () => {

    const skill = "Skills";

  // Находим Frontend и Tools
  const frontendSkills = skills.find(s => s.category.toLowerCase() === "frontend");
  const toolSkills = skills.find(s => s.category.toLowerCase() === "tools");

  return (
    <div id={skill} className="skills">
      <h2>Skills & Technologies</h2>
      <div className="skills-columns">
        {/* Левая колонка — Frontend */}
        {frontendSkills && (
          <div className="skills-column">
            <h3>{frontendSkills.category}</h3>
            <ul>
              {frontendSkills.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}

        {/* Правая колонка — Tools */}
        {toolSkills && (
          <div className="skills-column tools">
            <h3>{toolSkills.category}</h3>
            <ul>
              {toolSkills.items.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default Skills;
