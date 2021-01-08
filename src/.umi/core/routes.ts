// @ts-nocheck
import React from 'react';
import { ApplyPluginsType } from 'F:/work-more/react/umi-test/umi-pro/node_modules/_@umijs_runtime@3.3.3@@umijs/runtime';
import * as umiExports from './umiExports';
import { plugin } from './plugin';

export function getRoutes() {
  const routes = [
  {
    "path": "/login",
    "component": require('F:/work-more/react/umi-test/umi-pro/src/pages/login.js').default,
    "exact": true
  },
  {
    "path": "/",
    "component": require('F:/work-more/react/umi-test/umi-pro/src/layouts/index.js').default,
    "routes": [
      {
        "path": "/",
        "exact": true,
        "component": require('F:/work-more/react/umi-test/umi-pro/src/pages/index.js').default
      },
      {
        "path": "/home",
        "component": require('F:/work-more/react/umi-test/umi-pro/src/pages/home.js').default,
        "exact": true
      },
      {
        "path": "/about",
        "component": require('F:/work-more/react/umi-test/umi-pro/src/pages/about.js').default,
        "Routes": [
          "./routes/PrivateRoute.js"
        ],
        "exact": true
      },
      {
        "path": "/users",
        "component": require('F:/work-more/react/umi-test/umi-pro/src/pages/users.js').default,
        "exact": true
      },
      {
        "component": require('F:/work-more/react/umi-test/umi-pro/src/pages/nullPage.js').default,
        "exact": true
      }
    ]
  },
  {
    "component": require('F:/work-more/react/umi-test/umi-pro/src/pages/nullPage.js').default,
    "exact": true
  }
];

  // allow user to extend routes
  plugin.applyPlugins({
    key: 'patchRoutes',
    type: ApplyPluginsType.event,
    args: { routes },
  });

  return routes;
}
