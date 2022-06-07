import {useEffect} from 'react';

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
