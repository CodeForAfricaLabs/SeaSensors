import React from 'react';
import NewsHeader from '../components/NewsHeader';
import OurPartners from '../components/OurPartners';
import GetInvolved from '../components/GetInvolved';
import Footer from '../components/Footer';
import NewsTopStories from '../components/NewsTopStories';

import withRoot from '../withRoot';

function NewsPage() {
  return (
    <div className="main-container-parent">
      <NewsHeader />
      <NewsTopStories />
      <OurPartners />
      <GetInvolved />
      <Footer />
    </div>
  );
}

export default withRoot(NewsPage);
