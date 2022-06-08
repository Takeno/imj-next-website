import {ReactElement, useEffect} from 'react';

const Admin = () => {
  useEffect(() => {
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();
      // CMS.registerPreviewTemplate('blog', BlogBody)
    })();
  }, []);

  return <div />;
};

export default Admin;

Admin.getLayout = function getLayout(page: ReactElement) {
  return page;
};
