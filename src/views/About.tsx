import React from 'react';
import './About.css';
import Skill_item from '@/components/Skill_item';

export default function Content() {
  return (
    <div className='about-container'>
        <h1 className='about-title'>About me</h1>
        <div className='about-content'>
          <div className='about-info'>
            <img src='image.jpg' alt='profile' className='about-image'/>
            <p className='about-description'>Hi, I&apos;m Jonathan and I&apos;m 20 years old. I&apos;m currently studying a degree in Systems Engineering and Computer Science. I like everything related to Web development, which is why apart from university I learn technologies such as HTML, CSS, JavaScript, SQL, GIT, PHP and frameworks such as REACT, NEXT.JS and LARAVEL on my own. The language that I have used the most is Java.</p>
          </div>
          <div className='about-skills'>
            <div className='about-skill-row1'>
              <Skill_item src_img='html.png' name='HTML' />
              <Skill_item src_img='css.png' name='CSS' />
              <Skill_item src_img='js.png' name='JAVASCRIPT' />
            </div>
            <div className='about-skill-row2'>
              <Skill_item src_img='react.png' name='REACT' />
              <Skill_item src_img='nextjs.png' name='NEXT.JS' />
              <Skill_item src_img='java.png' name='JAVA' />
              <Skill_item src_img='git.png' name='GIT' />
            </div>
            <div className='about-skill-row3'>
              <Skill_item src_img='mysql.png' name='MYSQL' />
              <Skill_item src_img='php.png' name='PHP' />
              <Skill_item src_img='laravel.png' name='LARAVEL' />
            </div>
          </div>
        </div>
    </div>
  )
}
 