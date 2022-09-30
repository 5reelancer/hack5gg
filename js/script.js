(() => {
    const e = document.querySelectorAll(".card"),
        t = document.querySelectorAll(".question-block");
    e.forEach(((e, t, c) => {
        0 !== t && null !== e && e.addEventListener("click", (() => {
            e.classList.toggle("active")
        }))
    })), t.forEach(((e, t, c) => {
        e.addEventListener("click", (() => {
            e.classList.toggle("active")
        }))
    }));
    const c = document.querySelector(".modal_sale"),
        l = document.querySelector("#canselBtn"),
        n = document.querySelector("#saleClose"),
        o = document.querySelector(".items__title-btn");

    function s() {
        c.classList.add("hidden")
    }
    null !== o && o.addEventListener("click", (() => {
        c.classList.remove("hidden")
    })), null !== l && l.addEventListener("click", (() => {
        s()
    })), null !== n && n.addEventListener("click", (() => {
        s()
    }));
    const r = document.querySelector(".burger"),
        i = document.querySelector(".burger-menu");
    r.addEventListener("click", (() => {
        console.log("click"), r.classList.toggle("active"), i.classList.toggle("active")
    }))
})();

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJzY3JpcHQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiKCgpID0+IHtcbiAgICBjb25zdCBlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5jYXJkXCIpLFxuICAgICAgICB0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChcIi5xdWVzdGlvbi1ibG9ja1wiKTtcbiAgICBlLmZvckVhY2goKChlLCB0LCBjKSA9PiB7XG4gICAgICAgIDAgIT09IHQgJiYgbnVsbCAhPT0gZSAmJiBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKCkgPT4ge1xuICAgICAgICAgICAgZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pKVxuICAgIH0pKSwgdC5mb3JFYWNoKCgoZSwgdCwgYykgPT4ge1xuICAgICAgICBlLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKCkgPT4ge1xuICAgICAgICAgICAgZS5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpXG4gICAgICAgIH0pKVxuICAgIH0pKTtcbiAgICBjb25zdCBjID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi5tb2RhbF9zYWxlXCIpLFxuICAgICAgICBsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIiNjYW5zZWxCdG5cIiksXG4gICAgICAgIG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiI3NhbGVDbG9zZVwiKSxcbiAgICAgICAgbyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuaXRlbXNfX3RpdGxlLWJ0blwiKTtcblxuICAgIGZ1bmN0aW9uIHMoKSB7XG4gICAgICAgIGMuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKVxuICAgIH1cbiAgICBudWxsICE9PSBvICYmIG8uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsICgoKSA9PiB7XG4gICAgICAgIGMuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKVxuICAgIH0pKSwgbnVsbCAhPT0gbCAmJiBsLmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCAoKCkgPT4ge1xuICAgICAgICBzKClcbiAgICB9KSksIG51bGwgIT09IG4gJiYgbi5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCgpID0+IHtcbiAgICAgICAgcygpXG4gICAgfSkpO1xuICAgIGNvbnN0IHIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLmJ1cmdlclwiKSxcbiAgICAgICAgaSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCIuYnVyZ2VyLW1lbnVcIik7XG4gICAgci5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKCgpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbGlja1wiKSwgci5jbGFzc0xpc3QudG9nZ2xlKFwiYWN0aXZlXCIpLCBpLmNsYXNzTGlzdC50b2dnbGUoXCJhY3RpdmVcIilcbiAgICB9KSlcbn0pKCk7XG5cbiJdLCJmaWxlIjoic2NyaXB0LmpzIn0=
