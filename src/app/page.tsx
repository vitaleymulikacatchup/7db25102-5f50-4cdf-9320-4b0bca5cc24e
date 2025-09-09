use client

import { SiteThemeProvider } from '@/components/sections/ThemeProvider';
import NavbarLayoutFloatingInline from '@/components/navigation/NavbarLayoutFloatingInline';
import VoidHero from '@/components/sections/layouts/hero/VoidHero';
import SocialsAbout from '@/components/sections/layouts/about/SocialsAbout';
import HowToBuy2D from '@/components/sections/layouts/howtobuy/2DHTB';
import TextGridTokenomics from '@/components/sections/layouts/tokenomics/TextGridTokenomics';
import FooterLogoEmphasis from '@/components/footer/FooterLogoEmphasis';

export default function Home() {
  return (
    <SiteThemeProvider theme={{
      styleVariant: 'futuristicAndOutOfBox',
      colorTemplate: 2,
      textAnimation: 'slide'
    }}>
      <NavbarLayoutFloatingInline
        logoSrc="/images/logo.svg"
        logoAlt="NovaToken"
        navItems={[
          { name: 'Hero', id: 'hero' },
          { name: 'About', id: 'about' },
          { name: 'How to Buy', id: 'how-to-buy' },
          { name: 'Tokenomics', id: 'tokenomics' },
          { name: 'Footer', id: 'footer' }
        ]}
        buttonText="Get Started"
        className="navbar-class"
      />

      <div id="hero" data-section="hero" className="scroll-mt-24">
        <VoidHero
          title="Welcome to NovaToken"
          description="Experience the future of digital tokens"
          tagLabel="Explore the Possibilities"
          primaryButtonText="Get Started"
          secondaryButtonText="Learn More"
        />
      </div>

      <div id="about" data-section="about" className="scroll-mt-24">
        <SocialsAbout
          title="About NovaToken"
          descriptions={[
            "A bold token for the future",
            "Empowering users with technology"
          ]}
        />
      </div>

      <div id="how-to-buy" data-section="how-to-buy" className="scroll-mt-24">
        <HowToBuy2D
          variant="simple"
        />
      </div>

      <div id="tokenomics" data-section="tokenomics" className="scroll-mt-24">
        <TextGridTokenomics
          title="Tokenomics"
          description="Understanding our value structure"
          tokenData={[
            { value: "100M", description: "Total Supply" },
            { value: "10M", description: "Initial Circulation" }
          ]}
        />
      </div>

      <div id="footer" data-section="footer" className="scroll-mt-24">
        <FooterLogoEmphasis
          logoSrc="/images/logo.svg"
          logoAlt="NovaToken"
          logoText="NovaToken"
          columns={[
            {
              items: [
                { label: "Privacy Policy", onClick: () => {} },
                { label: "Terms of Service", onClick: () => {} }
              ]
            },
            {
              items: [
                { label: "Support", onClick: () => {} }
              ]
            },
            {
              items: [
                { label: "About Us", onClick: () => {} }
              ]
            }
          ]}
        />
      </div>
    </SiteThemeProvider>
  );
}