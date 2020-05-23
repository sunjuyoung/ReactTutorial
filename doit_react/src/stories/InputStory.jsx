import React from 'react';
import {storiesOf} from '@storybook/react';
import {action} from '@storybook/addon-actions';

import Input from '../03/Input';

        //스토리북도구에 표시할 스토리의 이름
storiesOf('Input',module)
.addWithJSX('기본 설정',()=><Input name="name"/>)
.addWithJSX('label 예제',()=><Input name="name" label="이름"/>)
.addWithJSX('onChange 예제',()=><Input name="name" onChange={action('onChage 이벤트발생')} />);
                              //스티로북 도구에 표시할 메뉴 이름