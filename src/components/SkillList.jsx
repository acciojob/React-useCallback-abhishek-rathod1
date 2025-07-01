import React from "react";

const SkillList = ({ skill, index, onDelete }) => {
  return (
    <li id={`skill-number-${index}`} onClick={()=> onDelete(skill)} style={{cursor: 'pointer'}}>
      {skill}      
    </li>
  );
};

export default React.memo(SkillList);
