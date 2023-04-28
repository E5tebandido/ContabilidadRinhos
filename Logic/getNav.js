var createNav = () => {
    if (document.getElementById ("gnav") == null) {
        let nav = document.createElement (
            "nav"
        );
        let logo = document.createElement (
            "span"
        );
        let butt = document.createElement (
            "button"
        );
        let menu = document.createElement (
            "div"
        );
        let navigation = document.createElement (
            "div"
        );
        let user = document.createElement (
            "a"
        );
        let pay = document.createElement (
            "a"
        );
        nav.appendChild ( 
            logo
        );
        nav.appendChild ( 
            butt
        );
        navigation.appendChild ( 
            user
        );
        navigation.appendChild ( 
            pay
        );
        menu.appendChild ( 
            navigation
        );
        nav.appendChild ( 
            menu
        );
        nav.className = "navbar navbar-expand-lg navbar-light bg-light";
        logo.className = "navbar-brand mb-0 h1";
        logo.textContent = "Rinhos contabilidad";
        user.className = "nav-item nav-link";
        user.href = "javascript:void(0)";
        user.textContent = "Deportistas";
        user.setAttribute("onClick","userPanel()");
        pay.className = "nav-item nav-link";
        pay.href = "javascript:void(0)";
        pay.textContent = "Pagos";
        pay.setAttribute("onClick","paymentPanel()");
        navigation.className = "navbar-nav";
        menu.className = "collapse navbar-collapse";
        menu.id = "gmenu";
        butt.className = "navbar-toggler";
        butt.type = "button";
        butt.setAttribute("data-toggle", "collapse");
        butt.setAttribute("data-target", "#gmenu");
        butt.setAttribute("aria-controls", "gmenu");
        butt.setAttribute("aria-expanded", "false");
        butt.setAttribute("aria-label", "Toggle navigation");
        document.getElementById(
            "supernav"
        ).appendChild (
            nav
        )
    }
}