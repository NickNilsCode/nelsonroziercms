import React from 'react';
import { render } from 'react-dom';
import { BlogPage } from '../pages';

if (window)
  render(
    <BlogPage data={window.__DATA__} />,
    document.getElementById('app')
  );
