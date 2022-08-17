import {ReactElement, useEffect} from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import * as SpoilerBlock from '../../components/Admin/SpoilerBlock';

const Admin = () => {
  useEffect(() => {
    netlifyIdentity.init();
    (async () => {
      const CMS = (await import('netlify-cms-app')).default;
      CMS.init();
      CMS.registerEditorComponent(SpoilerBlock.EditorConfiguration);
    })();
  }, []);

  return <div id="nc-root" />;
};

export default Admin;

Admin.getLayout = function getLayout(page: ReactElement) {
  return page;
};
