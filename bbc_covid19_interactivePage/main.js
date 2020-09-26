//익명함수 즉시 실행 //전역함수는 피하고 함수는 바로 실행할수 있도록

(()=>{

    const actions={
        birdFlies(key){
            if(key){
                document.querySelector('[data-index="2"] .bird').style.transform=`translateX(${window.innerWidth}px)`;
            }else{
                document.querySelector('[data-index="2"] .bird').style.transform=`translateX(-100%)`;
            }
            
        },
        birdFlies2(key){
            if(key){
                document.querySelector('[data-index="5"] .bird').style.transform=`translateX(${window.innerWidth}px)`;
            }else{
                document.querySelector('[data-index="5"] .bird').style.transform=`translateX(-100%)`;
            }
            
        }
    };

    const stepElems = document.querySelectorAll('.step');
    const graphElems = document.querySelectorAll('.graphic-item');
    let currentItem =graphElems[0]; //현재 활성화된 visible클래스
    let ioIndex;

    const io = new IntersectionObserver((entries,observer)=>{
       // console.log(entries[0].target.dataset.index);
        ioIndex =entries[0].target.dataset.index * 1; //숫자로 변환
    });

    //이미지와 텍스트 쌍을 맞추기위해 data-index 속성 추가
    for(let i=0; i< stepElems.length; i++){
        io.observe(stepElems[i]);  //옵저버 관찰대상이 사라지거나 실행될때 콜백함수 실행
        stepElems[i].setAttribute('data-index',i);
        graphElems[i].dataset.index = i;
    }

    function activate(action){
        currentItem.classList.add('visible');
       //
        if(action){
            //actions.birdFiles();
            actions[action](true);
        }
    }

    
    function inactivate(action){
        currentItem.classList.remove('visible')
        if(action){
            //actions.birdFiles();
            actions[action](false);
        }
    }

    window.addEventListener('scroll',()=>{
        let step;
        let boundingRect;
        
       /*  for(let i=0; i< stepElems.length; i++){ */
        for(let i=ioIndex -1; i< ioIndex+2; i++){
            step = stepElems[i];
            if(!step) continue;
            boundingRect = step.getBoundingClientRect();

           // console.log(boundingRect);
            /*
                DOMRect
                bottom: 2587.65625
                height: 90
                left: 15
                right: 487
                top: 2497.65625
                width: 472
                x: 15
                y: 2497.65625 
             */
            if((boundingRect.top > window.innerHeight * 0.1) &&
                (boundingRect.top< window.innerHeight *0.8)){
                    //console.log(step.dataset.index);
                    
                    if(currentItem){
                        inactivate(currentItem.dataset.action);
                    }
                    
                    currentItem =graphElems[step.dataset.index];
                    activate(currentItem.dataset.action);

                }
        }
    });
    activate(currentItem.dataset.action);

})();