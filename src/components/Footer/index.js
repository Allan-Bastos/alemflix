import React from 'react';
import { FooterBase } from './styles';
import Imggit from './fimg/github.png';
import Imgtwt from './fimg/twitter.png';
import Imgstn from './fimg/steam.png';
import Imginsta from './fimg/instagram.png';

function Footer() {
  return (
    <FooterBase>
        <a href="https://twitter.com/AllnBastos">
          <img className='twtimg'src={Imgtwt} alt="Logo Twitter" />
        </a>
        <a href="https://github.com/Allan-Bastos">
          <img className='fotimg' src={Imggit} alt="Logo Github" />
        </a>
        <a href="https://steamcommunity.com/id/aAlemzinho/">
          <img className='fotimg' src={Imgstn} alt="Logo Steam" />
        </a>
        <a href="https://www.instagram.com/allnbastos/">
          <img className='fotimg' src={Imginsta} alt="Logo Insta" />
        </a>
      <p>
        Orgulhosamente criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
