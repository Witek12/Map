import React from 'react';
import Header from '.';
import { storiesOf } from '@storybook/react';
import './style.scss'



storiesOf('Header', module)
.add('default', () => <Header />)