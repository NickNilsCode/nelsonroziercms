import React from 'react';
import { render } from 'react-dom';
import { ListPage } from '../pages';

if (window)
  render(
    <ListPage data={window.__DATA__} />,
    document.getElementById('app')
  );
