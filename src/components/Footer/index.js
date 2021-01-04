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
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>Testimonials</FooterLink>
              <FooterLink to='/signin'>Careers</FooterLink>
              <FooterLink to='/signin'>Github</FooterLink>
              <FooterLink to='/signin'>Terms of Service</FooterLink>
            </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>About Us</FooterLinkTitle>
              <FooterLink to='/signin'>About us</FooterLink>
              <FooterLink to='/signin'>How it works</FooterLink>
              <FooterLink to='/signin'>Testimonials</FooterLink>
              <FooterLink to='/signin'>Careers</FooterLink>
              <FooterLink to='/signin'>Github</FooterLink>
              <FooterLink to='/signin'>Terms of Service</FooterLink>
            </FooterLinkItems>
          </FooterLinksWrapper>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/signin'>About us</FooterLink>
            <FooterLink to='/signin'>How it works</FooterLink>
            <FooterLink to='/signin'>Testimonials</FooterLink>
            <FooterLink to='/signin'>Careers</FooterLink>
            <FooterLink to='/signin'>Github</FooterLink>
            <FooterLink to='/signin'>Terms of Service</FooterLink>
          </FooterLinkItems>
          <FooterLinkItems>
            <FooterLinkTitle>About Us</FooterLinkTitle>
            <FooterLink to='/signin'>About us</FooterLink>
            <FooterLink to='/signin'>How it works</FooterLink>
            <FooterLink to='/signin'>Testimonials</FooterLink>
            <FooterLink to='/signin'>Careers</FooterLink>
            <FooterLink to='/signin'>Github</FooterLink>
            <FooterLink to='/signin'>Terms of Service</FooterLink>
          </FooterLinkItems>
        </FooterLinksContainer>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
