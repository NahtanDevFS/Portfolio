import React from 'react';
import './Skill_item.css';

interface SkillItemProps {
  src_img: string;
  name: string;
}

const Skill_item: React.FC<SkillItemProps> = ({ src_img, name }) => {
  return (
    <div className='skill-item-container'>
      <img src={src_img} alt={name} className='skill-item-image' />
      <p className='skill-item-name'>{name}</p>
    </div>
  );
};

export default Skill_item;