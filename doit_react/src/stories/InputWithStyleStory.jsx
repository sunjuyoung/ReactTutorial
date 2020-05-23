import React from 'react';
import {storiesOf} from '@storybook/react';

import InputWithStyle from '../04/InputWithStyle';

storiesOf('InputWithStyle',module)
.addWithJSX('기본 설정',()=><InputWithStyle name="name"/>)
.addWithJSX('label',()=><InputWithStyle name="name" label="이름"/>)
.addWithJSX('value',()=><InputWithStyle name="name" label="이름" value="리액트"/>)
.addWithJSX('errorMessage',()=><InputWithStyle name="name" label="이름" errorMessage="이름이.."/>);