import React from 'react';
import cl from './Loader.module.scss';

const Loader: React.FC = () => (
  <div data-testid="loader" className={cl.loader}>
    <div className={cl.loader__animation}>
    </div>
  </div>
);

export default Loader;