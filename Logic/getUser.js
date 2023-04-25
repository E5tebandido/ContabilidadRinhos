var udata = async () => {
    const response = await fetch (
        "./Data/User.json"
    );
    var data = await response.json();
    addUTable(
        data
    );
}

var createTable = () => {
    if (document.getElementById("utable") == null) {
        let table = document.createElement (
            "table"
        );
        let thead = document.createElement (
            "thead"
        );
        let tbody = document.createElement (
            "tbody"
        );
        let tfood = document.createElement (
            "tfooter"
        ); 
        let trow = document.createElement (
            "tr"
        );  
        let tnew = document.createElement (
            "a"
        );  
        let snew = document.createElement (
            "a"
        ); 
        table.appendChild (
            thead
        );
        thead.appendChild (
            trow
        );
        trow.appendChild (
            document.createElement (
                "th"
            )
        ).textContent = "Documento";
        trow.appendChild (
            document.createElement (
                "th"
            )
        ).textContent = "Nombre";
        trow.appendChild (
            document.createElement (
                "th"
            )
        ).textContent = "Categoria";
        trow.appendChild (
            document.createElement (
                "th"
            )
        ).textContent = "Numero";
        trow.appendChild (
            document.createElement (
                "th"
            )
        ).textContent = "Estado de pago";
        table.appendChild (
            tbody
        );
        table.appendChild (
            tfood
        );
        document.getElementById("panel").appendChild (
            tnew
        );
        snew.className = "invisible";
        snew.id = "savedata";
        snew.href = "javascript:void(0)";
        snew.textContent = "Guardar";
        snew.setAttribute("onClick","sendData()");
        table.id = "utable"; 
        tbody.id = "ubody";
        table.className = "table table-bordered";
        tnew.className = "btn rounded-0 btn-block";
        tnew.id = "insertnewr";
        tnew.href = "javascript:void(0)";
        tnew.textContent = "Agregar nuevo";
        tnew.setAttribute("onClick","addNewU()");
        document.getElementById (
            "panel"
        ).appendChild (
            table
        ); 
        document.getElementById("panel").appendChild (
            snew
        );
    } else {
        console.log(
            "ya existe la tabla" + document.getElementById (
                "utable"
            )
        );
    }
    return document.getElementById("ubody");
}

var addUTable = (data) => {
    let tbody = createTable();
    if ( 
        tbody.hasChildNodes() && 
        tbody.childNodes.length == data.length
    ) {
        console.log ( 
            "No se detectan cambios"
        )
    } else {
        console.log ( 
            "Se detectan cambios"
        )
        while ( 
            tbody.firstChild
        ) {
            tbody.removeChild (
                tbody.firstChild
            );
        }
        document.getElementById (
            "savedata"
        ).className = "invisible";
        for (var i = 0; i < data.length; i++) {
            let tr = document.createElement (
                'tr'
            );
            tbody.appendChild (
                tr
            );
            console.log(Object.keys(data[i]).length);
            for (var j = 0; j < Object.keys(data[i]).length; j++) {
                let td = document.createElement (
                    'td'
                );
                td.appendChild (
                    document.createTextNode (
                        Object.values(data[i])[j]
                    )
                );
                tr.appendChild (
                    td
                );
            }
        }
    }
}

var addNewU = () => {
    let tbody = createTable();
    if (
        document.getElementById (
            "val0"
        )
    ) {
        console.log (
            "Ya existe"
        );
    } else {
        for (var i = 0; i < 1; i++) {
            let tr = document.createElement (
                'tr'
            );
            tbody.appendChild (
                tr
            );
            for (var j = 0; j < 5; j++) {
                let td = document.createElement (
                    'td'
                );
                let newval = document.createElement (
                    'input'
                );
                newval.id = "val"+j;
                newval.className="form-control rounded-0";
                td.appendChild (
                    newval
                );
                tr.appendChild (
                    td
                );
            }
        }
        document.getElementById (
            "savedata"
        ).className = "btn rounded-0 bg-success text-white visible";
    }
}

var stringfyData = () => {
    return JSON.stringify (
        {
            "Documento" : document.getElementById("val0").value,
            "Nombre" : document.getElementById("val1").value,
            "Categoria" : document.getElementById("val2").value,
            "Numero" : document.getElementById("val3").value,
            "Epago" : document.getElementById("val4").value,
        }
    )
}

var sendData = () => {
    fetch (
        "https://e5tebandido.github.io/Data/Users.json", {
            credentials: 'same-origin',
            method: "POST",
            body: stringfyData(),
            headers: {
                "Content-type": "application/json"
            }
        }
    ).then (
        (response) => response.json()
    )
    .then(
        (json) => console.log (
            json
        )
    );
    udata();
}