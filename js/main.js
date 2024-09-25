document.addEventListener("DOMContentLoaded", () => {

    /* 슬라이드 부분 */
    const slide = document.getElementsByClassName("slide")[0]; //슬라이드

    const toLeft = () => {
        slide.style.transition = "left 2s"
        slide.style.left = "-100%"

        setTimeout( () => x(), 3000 );
        x = () => {
            slide.style.left= 0;
            slide.style.transition = 'none';
            slide.append(slide.firstElementChild);
        }
    }

    setInterval (toLeft, 4500);


    /* 공동구매 화살표 */
    const slider = document.querySelector('.p2');
    const slides = document.querySelectorAll('.p2 div');
    const prevButton = document.querySelector('.p1');
    const nextButton = document.querySelector('.p3');

    let currentIndex = 0;

    function updateSlider() {
        const offset = -currentIndex * 300; // 슬라이드 너비에 따라 조정
        slider.style.transform = `translateX(${offset}px)`;
    }

    nextButton.addEventListener('click', () => {
        if (currentIndex < slides.length - 1) {
            currentIndex++;
        } else {
            currentIndex = 0; // 마지막 슬라이드에서 처음으로 돌아감
        }
        updateSlider();
    });

    prevButton.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
        } else {
            currentIndex = slides.length - 1; // 첫 번째 슬라이드에서 마지막으로 돌아감
        }
        updateSlider();
    });

    // ----------------------------------------------------
    // const btnLeft = document.getElementsByClassName("p1")[0];
    // const btnRight = document.getElementsByClassName("p3")[0];

    // const arrowSlideArea = document.getElementsByClassName("p2")[0];

    // let isAnimating = false; // 애니메이션 진행 상태를 추적하는 변수

    // /*왼쪽 화살표*/
    // const left = () => {

    //     if (isAnimating) return; // 애니메이션 진행 중이면 클릭 무시
    //     isAnimating = true; // 애니메이션 시작
    
    //     arrowSlideArea.style.left = "-300px";
    //     arrowSlideArea.style.transition = "left 1s";

    //     setTimeout(z, 1001);
        
    // };
    // const z = () => {
    //     arrowSlideArea.style.left = "0";
    //     arrowSlideArea.style.transition = "none";
    //     arrowSlideArea.append(arrowSlideArea.firstElementChild);

    //     setTimeout(() => {
    //         isAnimating = false;
    //     }, 50); // 애니메이션 완료
    // };

    // btnLeft.addEventListener("click", left);

    // /*오른쪽 화살표*/

    // const Right = () => {

    //     if (isAnimating) return; // 애니메이션 진행 중이면 클릭 무시
    //     isAnimating = true; // 애니메이션 시작

    //     arrowSlideArea.style.left = "0";
    //     arrowSlideArea.style.transition = "left 1s";
        
    //     setTimeout(y, 1001);
    // };
    // const y = () => {
    //     arrowSlideArea.style.transition = "none";
    //     arrowSlideArea.prepend(arrowSlideArea.lastElementChild);
    //     arrowSlideArea.style.left = "-300px";
        
    //     setTimeout(() => {
    //         isAnimating = false;
    //     }, 50); // 애니메이션 완료
    // }
    // btnRight.addEventListener("click", Right);
    // ----------------------------------------------------


    /* 팝업 */
    const cN_popup = document.querySelector(".cN a");
    const popup = document.getElementById("popup");
    const btn = document.querySelector("#popup button");

    // let pop = true;
    // const open = () => {
    //     popup.style.display = "block";
    //     pop = false;
    // }

    // const close = () => {
    //     popup.style.display = "none";
    //     pop = true;
    // }

    // cN_popup.forEach( i => {
    //     i.addEventListener("click", () => {
    //         pop ? open() : close();
    //     });
    // });
    // btn.addEventListener("click", () => {
    //     btn ? close() : open();
    // })

    cN_popup.addEventListener("click", () => {
        popup.style.display = "block";
    });

    btn.addEventListener("click", () => {
        popup.style.display = "none"
    })
})//end