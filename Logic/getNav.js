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
        let assistance = document.createElement (
            "a"
        );
        let classes = document.createElement (
            "a"
        );
        let plafield = document.createElement (
            "a"
        );
        let monthly = document.createElement (
            "a"
        );
        let lfp = document.createElement (
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
            assistance
        );
        navigation.appendChild ( 
            classes
        );
        navigation.appendChild ( 
            plafield
        );
        navigation.appendChild ( 
            monthly
        );
        navigation.appendChild ( 
            lfp
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
        assistance.className = "nav-item nav-link";
        assistance.href = "javascript:void(0)";
        assistance.textContent = "Asistencia";
        assistance.setAttribute("onClick","assistancePanel()");
        classes.className = "nav-item nav-link";
        classes.href = "javascript:void(0)";
        classes.textContent = "Clases";
        classes.setAttribute("onClick","classesPanel()");
        plafield.className = "nav-item nav-link";
        plafield.href = "javascript:void(0)";
        plafield.textContent = "Cancha";
        plafield.setAttribute("onClick","plafieldPanel()");
        monthly.className = "nav-item nav-link";
        monthly.href = "javascript:void(0)";
        monthly.textContent = "Mensualidad";
        monthly.setAttribute("onClick","monthlyPanel()");
        lfp.className = "nav-item nav-link";
        lfp.href = "javascript:void(0)";
        lfp.textContent = "Liga-Federacion-Poliza";
        lfp.setAttribute("onClick","lfpPanel()");
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