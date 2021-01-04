import React from 'react'
import {
  FooterContainer,
  FooterLink,
  FooterLinkItems,
  FooterLinksContainer,
  FooterLinksWrapper,
  FooterLinkTitle,
  FooterWrap,
} from './FooterElements'

const Footer = () => {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinksContainer>
          <FooterLinksWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About</FooterLinkTitle>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>Sign in</FooterLink>
              <FooterLink to='/signin'>Github</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact</FooterLinkTitle>
              <FooterLink to='/signin'>Email</FooterLink>
              <FooterLink to='/signin'>Phone</FooterLink>
              <FooterLink to='/signin'>LinkedIn</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
