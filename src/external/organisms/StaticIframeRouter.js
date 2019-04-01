import React from 'react';
import { Route, Switch } from 'react-router';

import staticSites from '../../constants/staticSites';
import IFrame from '../atoms/IFrame';

const StaticIFrameRouter = () =>
  staticSites.map(({ path, url }) => (
    <Route
      key={path}
      path={`/${path}`}
      render={props => <IFrame {...props} url={url} path={path} />}
    />
  ));

StaticIFrameRouter.propTypes = {};

export default StaticIFrameRouter;
