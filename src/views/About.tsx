import React from 'react'
import './About.css'
import Skill_item from '@/components/Skill_item'

export default function Content() {
  return (
    <div className='about-container'>
        <h1 className='about-title'>About me</h1>
        <div className='about-content'>
          <div className='about-info'>
            <img src='image.jpg' alt='profile' className='about-image'/>
            <p className='about-description'>I'm studying the Systems engineering major and by my side learning about web programming with technologies like HTML, CSS, JavaScript and PHP and frameworks like React.js, Next.js and Laravel</p>
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
 