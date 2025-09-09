"use client";
import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarStyleApple from '@/components/navigation/NavbarStyleApple/NavbarStyleApple';
import FrameHero from '@/components/sections/layouts/hero/FrameHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import PatternTokenomics from '@/components/sections/layouts/tokenomics/PatternTokenomics';
import BentoFAQ from '@/components/sections/layouts/faq/BentoFAQ';
import FooterBase from '@/components/footer/FooterBase';

export default function Home() {
  return (
    <SiteThemeProvider theme={{ styleVariant: 'funAndTrendy', colorTemplate: 1, textAnimation: 'highlight' }}>
      <NavbarStyleApple
        brand="DogMemCoin"
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How To Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'FAQ', id: 'faq' },
          { name: 'Footer', id: 'footer' }
        ]}
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <FrameHero 
          title="Welcome to DogMemCoin"
          description="Discover how to invest in DogMemCoin today!"
          primaryButtonText="Join the Pack"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="What is DogMemCoin?"
          descriptions={[
            "DogMemCoin is a community-driven cryptocurrency.",
            "Join us in reshaping the future of meme coins!"
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <PatternTokenomics
          title="Tokenomics Overview"
          description="Here’s how our economy works."
          kpiItems={[
            { value: "50M", description: "Total Supply", icon: null },
            { value: "20%", description: "Liquidity", icon: null }
          ]}
        />
      </div>

      <div id="faq" data-section="faq" className="scroll-mt-24">
        <BentoFAQ
          items={[
            { title: "What is DogMemCoin?", content: "DogMemCoin is a community-driven cryptocurrency aiming to make meme coins mainstream." },
            { title: "How can I buy DogMemCoin?", content: "You can purchase DogMemCoin on various DEX platforms using Ethereum." }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterBase
          logoSrc="/images/logo.svg"
          logoWidth={100}
          logoHeight={50}
          columns={[
            { title: 'Quick Links', items: [
              { label: 'Home', onClick: () => { console.log('Navigated to Home'); } },
              { label: 'About', onClick: () => { console.log('Navigated to About'); } },
            ]},
            { title: 'Resources', items: [
              { label: 'Whitepaper', onClick: () => { console.log('Navigated to Whitepaper'); } },
              { label: 'FAQs', onClick: () => { console.log('Navigated to FAQs'); } },
            ]},
            { title: 'Contact Us', items: [
              { label: 'Support', onClick: () => { console.log('Navigated to Support'); } },
              { label: 'Social Media', onClick: () => { console.log('Navigated to Social Media'); } },
            ]}
          ]}
          copyrightText="© 2023 DogMemCoin"
          onPrivacyClick={() => { console.log('Privacy Policy Clicked'); }}
        />
      </div>
    </SiteThemeProvider>
  );
}
