const tabsBtn   = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");
const dialogBtn   = document.querySelectorAll(".dialog__nav-btn");
const dialogItems = document.querySelectorAll(".dialog__item");

tabsBtn.forEach(onTabClick);
dialogBtn.forEach(onTabClick);

function onTabClick(item) {
    item.addEventListener("click", function () {
        let currentBtn = item;
        let tabId = currentBtn.getAttribute("data-tab");
        let currentTab = document.querySelector(tabId);


        if ( ! currentBtn.classList.contains('active')) {
            tabsBtn.forEach(function (item) {
                item.classList.remove('active');
            });
            dialogBtn.forEach(function(item) {
                item.classList.remove('active');
            });
    
            tabsItems.forEach(function (item) {
                item.classList.remove('active');
            });
             dialogItems.forEach(function(item) {
                item.classList.remove('active');
            });
    
            currentBtn.classList.add('active');
            currentTab.classList.add('active');
        };
    });
};

document.querySelector('.tabs__nav-btn').click();


//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJ0YWIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGFic0J0biAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi50YWJzX19uYXYtYnRuXCIpO1xyXG5jb25zdCB0YWJzSXRlbXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKFwiLnRhYnNfX2l0ZW1cIik7XHJcbmNvbnN0IGRpYWxvZ0J0biAgID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kaWFsb2dfX25hdi1idG5cIik7XHJcbmNvbnN0IGRpYWxvZ0l0ZW1zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5kaWFsb2dfX2l0ZW1cIik7XHJcblxyXG50YWJzQnRuLmZvckVhY2gob25UYWJDbGljayk7XHJcbmRpYWxvZ0J0bi5mb3JFYWNoKG9uVGFiQ2xpY2spO1xyXG5cclxuZnVuY3Rpb24gb25UYWJDbGljayhpdGVtKSB7XHJcbiAgICBpdGVtLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRCdG4gPSBpdGVtO1xyXG4gICAgICAgIGxldCB0YWJJZCA9IGN1cnJlbnRCdG4uZ2V0QXR0cmlidXRlKFwiZGF0YS10YWJcIik7XHJcbiAgICAgICAgbGV0IGN1cnJlbnRUYWIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhYklkKTtcclxuXHJcblxyXG4gICAgICAgIGlmICggISBjdXJyZW50QnRuLmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcclxuICAgICAgICAgICAgdGFic0J0bi5mb3JFYWNoKGZ1bmN0aW9uIChpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgZGlhbG9nQnRuLmZvckVhY2goZnVuY3Rpb24oaXRlbSkge1xyXG4gICAgICAgICAgICAgICAgaXRlbS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICBcclxuICAgICAgICAgICAgdGFic0l0ZW1zLmZvckVhY2goZnVuY3Rpb24gKGl0ZW0pIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgZGlhbG9nSXRlbXMuZm9yRWFjaChmdW5jdGlvbihpdGVtKSB7XHJcbiAgICAgICAgICAgICAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgIFxyXG4gICAgICAgICAgICBjdXJyZW50QnRuLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgICAgICBjdXJyZW50VGFiLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xyXG4gICAgICAgIH07XHJcbiAgICB9KTtcclxufTtcclxuXHJcbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy50YWJzX19uYXYtYnRuJykuY2xpY2soKTtcclxuXHJcblxyXG4iXSwiZmlsZSI6InRhYi5qcyJ9
