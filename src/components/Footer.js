import React from 'react';
import { Icon } from '@iconify/react';

const Footer = () => {
  return (
<div class="mt-5 p-4 bg-black text-white text-center">
<div className='icons-class'>
  <a href='mailto:redinamishka@gmail.com'>
   <Icon icon="clarity:email-solid" /></a>
   </div>

  <div className='icons-class'>
    <a href='https://www.upwork.com/freelancers/~01f4b3ece8fb099860' target='_blank' rel="noopener noreferrer">
   <Icon icon="simple-icons:upwork" /></a>
   </div>

   <div className='icons-class'>
   <a href='https://www.fiverr.com/mishkaredina' target='_blank' rel="noopener noreferrer">
   <Icon icon="jam:fiverr" /></a>
   </div>

   <div className='icons-class'>
   <a href='https://www.peopleperhour.com/freelancer/redina-mishka-web-developer-jaamwzm' target='_blank' rel="noopener noreferrer">
   <Icon icon="gg:smile-no-mouth" /></a>
   </div>

   <div className='icons-class'>
   <a href='https://github.com/redinaM' target='_blank' rel="noopener noreferrer">
   <Icon icon="akar-icons:github-fill" /></a>
   </div>

   <br/>
   <br/>
  <p style={{textAlign: 'center', fontWeight: 'bold', fontSize: 18}}><b>©2020-2022 Redina Mishka Inc. All rights reserved</b></p>
</div>

  )
}

export default Footer