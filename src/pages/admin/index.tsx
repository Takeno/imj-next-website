import {ReactElement, useEffect} from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const Admin = () => {
  useEffect(() => {
    netlifyIdentity.init();
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();
      // CMS.registerPreviewTemplate('blog', BlogBody)
    })();
  }, []);

  return <div id="nc-root" />;
};

export default Admin;

Admin.getLayout = function getLayout(page: ReactElement) {
  return page;
};
