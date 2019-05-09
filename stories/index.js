import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '@storybook/react/demo';
import Progressbar from 'react-inputbox';

storiesOf('Button', module)
  .add('with text', () => 
    // <button>Hello Button</button>
    <Progressbar/>
  )
  .add('with emoji', () => (
    <button><span role="img" aria-label="so cool">😀 😎 👍 💯</span></button>
  ));  