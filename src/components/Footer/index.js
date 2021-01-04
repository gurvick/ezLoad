import React from 'react'
import { FaLinkedin, FaGithub, FaYoutube } from 'react-icons/fa'
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  WebsiteRights,
  SocialIcons,
  SocialIconLink,
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to='/'>ezLoad</SocialLogo>
            <WebsiteRights>
              ezLoad © {new Date().getFullYear()} All rights reserved.
            </WebsiteRights>
            <SocialIcons>
              <SocialIconLink
                href='//www.github.com/gurvick/ezLoad'
                target='_blank'
                aria-label='Github'
              >
                <FaGithub />
              </SocialIconLink>
              <SocialIconLink
                href='//www.linkedin.com/in/gurvick-ghai'
                target='_blank'
                aria-label='Linkedin'
              >
                <FaLinkedin />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' aria-label='YouTube'>
                <FaYoutube />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
