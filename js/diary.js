document.addEventListener("DOMContentLoaded", () => {

    const h2 = [...document.getElementsByTagName("h2")];
    const content = [...document.getElementsByClassName("mm")];

    h2.forEach((i,j) => {
        i.addEventListener("click", e => {
            e.preventDefault();
            
            if(j == h2.length-1) alert("추가하시겠습니까?");
            // h2[h2.length-1]
            else {
                h2.forEach(y => {
                    y.classList.remove("hit");
                })
                
                content.forEach(x => {
                    x.classList.remove("show");
                });
                
                h2[j].classList.add("hit");
                content[j-1].classList.add("show");
            };

        });

    });

    const btn = document.getElementById("plus");

    btn.addEventListener("click", () => {
        alert("오늘 일정을 추가하시겠습니까?");
    });

});