import {configure, setAddon} from '@storybook/react';
import interopRequireDefault from 'babel-runtime/helpers/interopRequireDefault';
import JSXAddon from 'storybook-addon-jsx';

import '../src/sass/materialize.scss';

//sotires폴더에있는 ~Story.jsx라고 끝나는 이름의 파일들을 config.js에 자동으로 추가
function loadStories(){
        //require.context() 함수로 src/stories 폴더의 스토리 목록을 가져온다
    const context = require.context('../src/stories',true, /Story\.jsx$/);
    context.keys().forEach((srcFile)=>{
        interopRequireDefault(context(srcFile));
    });

    
    /* require('../src/stories/InputStroy');
    require('../src/stories/NewCounterStory'); */
}

setAddon(JSXAddon);
configure(loadStories,module);  