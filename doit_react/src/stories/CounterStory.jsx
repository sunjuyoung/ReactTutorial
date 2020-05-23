import React from 'react';
import {storiesOf} from '@storybook/react';

import Counter from '../03/Counter';

storiesOf('Counter',module).add('기본 설정',()=><Counter count={0}/>);