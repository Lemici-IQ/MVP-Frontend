import React from 'react';
import NewsletterSection from '../../components/NewsLetterComponents/NewsLetter/NewsletterSection';
import NewsletterSignup from '../../components/NewsLetterComponents/NewsLetter/NewletterSignUp';
import BlogSection from '../../components/NewsLetterComponents/NewsLetter/BlogSection';
import FooterSection from '../../components/NewsLetterComponents/NewsLetter/FooterSection';

function NewsLetter() {
  return (
    <>
      <NewsletterSection />
      <NewsletterSignup />
      <BlogSection />
      <FooterSection />
    </>
  )
}

export default NewsLetter;
