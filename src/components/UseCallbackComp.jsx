import React, { useCallback, useState } from "react";
import SkillList from "./SkillList";

const UseCallbackComp = () => {
  const [skillInput, setSkillInput] = useState("");
  let [skillList, setSkillList] = useState([
    "HTML",
    "CSS",
    "JavaScript",
    "React",
  ]);

  // add skill
  const handleAddSkill = useCallback(() => {
    const trimmedSkill = skillInput.trim();
    if (trimmedSkill === "") {
      alert("Dont add an empty skill");
      return;
    }
    if (skillList.includes(trimmedSkill)) {
      alert("Dont repeat skill");
      return;
    }
    setSkillList((prev) => [...prev, trimmedSkill]);
    setSkillInput("");
  }, [skillInput, skillList]);

  // delete skill
  const handleDeleteSkill = useCallback((skillToDelete) => {
    setSkillList((prev) => prev.filter((skill) => skill !== skillToDelete));
  }, []);
  return (
    <div>
      <input
        onChange={(e) => setSkillInput(e.target.value)}
        id="skill-input"
        type="text"
        value={skillInput}
        placeholder="Enter Skill"
      />
      <button id="skill-add-btn" onClick={handleAddSkill}>
        Add Skill
      </button>
      <ul>
        {skillList.map((skill, index) => {
          // console.log(skill);
          return (
            <SkillList
              key={index}
              skill={skill}
              index={index}
              onDelete={handleDeleteSkill}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default UseCallbackComp;
