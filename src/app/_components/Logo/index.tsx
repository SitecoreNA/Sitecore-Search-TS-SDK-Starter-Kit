// import { LOGO_IMAGE_URL as logoUrl, LOGO_IMAGE_HEIGHT } from '@/app/_data/customizations';

const Logo = () => {

  const sitecoreLogo = (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-plane h-8 w-8 text-blue-600" aria-hidden="true"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
  );

  // if (logoUrl && logoUrl.includes('https')) return <img src={logoUrl} alt="Customer Logo" className="mr-8" style={{height: `${LOGO_IMAGE_HEIGHT}px`}} />

  return sitecoreLogo

};

export default Logo;
