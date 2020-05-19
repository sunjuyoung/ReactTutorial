import React from 'react';
import {storiesOf} from '@storybook/react';

import Input from '../03/Input';

        //스토리북도구에 표시할 스토리의 이름
storiesOf('Input',module).add('기본 설정',()=><Input />);
                              //스티로북 도구에 표시할 메뉴 이름