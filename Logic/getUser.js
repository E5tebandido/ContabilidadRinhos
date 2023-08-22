var udata = (db,tb) => {
    runFire();
    firebase.database().ref (
        db
    ).child (
        tb
    ).once ( 
        'value', 
        response => {
            try {
                createTable (
                    db,
                    tb
                );
                addUHead (
                    response.val()
                );
                addUBody(
                    response.val(),
                    db,
                    tb
                );
                $(
                    '#utable'
                ).DataTable();
            } catch (
                e
            ) {
                alert (
                    "No hay datos aún"
                );
            }
        }
    )
}

var createTable = (db,tb) => {
    if (document.getElementById (
        "utable"
        ) && document.getElementById (
            "insertnewr"
        ) && document.getElementById (
            "respcon"
        )
    ) {
        document.getElementById (
            "utable"
        ).remove();
        document.getElementById (
            "insertnewr"
        ).remove();
        document.getElementById (
            "respcon"
        ).remove();
    }
    if (
        document.getElementById (
            "deldata"
        )
    ) {
        document.getElementById (
            "deldata"
        ).remove();
    }
    if (
        document.getElementById (
            "savedata"
        )
    ) {
        document.getElementById (
            "savedata"
        ).remove();
    }
    if (
        document.getElementById (
            "cancelop"
        )
    ) {
        document.getElementById (
            "cancelop"
        ).remove();
    }
    let responsivecon = document.createElement (
        "div"
    );
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
    let tnew = document.createElement (
        "a"
    );  
    table.appendChild (
        thead
    );
    table.appendChild (
        tbody
    );
    table.appendChild (
        tfood
    );
    document.getElementById (
        "panel"
    ).appendChild (
        tnew
    );
    table.id = "utable"; 
    tbody.id = "ubody";
    thead.id = "uhead";
    responsivecon.id = "respcon";
    responsivecon.className = "table-responsive p-3";
    table.className = "table table-bordered";
    tnew.className = "btn float-right btn-primary m-3";
    tnew.id = "insertnewr";
    tnew.href = "javascript:void(0)";
    tnew.textContent = "Agregar nuevo";
    tnew.addEventListener (
        "click",
        () => {
            getTableParam().then (
                users => {
                    addNew(null,db,tb,users[tb]);
                }
            ) 
            .catch (
                err => console.log (err)
            )
        }
    );
    document.getElementById (
        "panel"
    ).appendChild (
        responsivecon
    );
    document.getElementById (
        "respcon"
    ).appendChild (
        table
    );
}

var addUHead = (data) => {
    let thead = document.getElementById("uhead");
    for (var i = 0; i < 1; i++) {
        let tr = document.createElement (
            'tr'
        );
        thead.appendChild (
            tr
        );
        for (var j = 0; j < Object.keys(data[Object.keys(data)[i]]).length; j++) {
            let td = document.createElement (
                'th'
            );
            td.setAttribute("data-field",Object.keys(data[Object.keys(data)[i]])[j]);
            td.appendChild (
                document.createTextNode (
                    Object.keys(data[Object.keys(data)[i]])[j]
                )
            );
            tr.appendChild (
                td
            );
        }
    }
}

var addUBody = (data,db,tb) => {
    let tbody = document.getElementById("ubody");
    for (var i = 0; i < Object.keys(data).length; i++) {
        let tr = document.createElement (
            'tr'
        );
        tr.addEventListener (
            "click",
            () => {
                getTableParam().then (
                    users => {
                        addNew(tr.childNodes,db,tb,users[tb]);
                    }
                ) 
                .catch (
                    err => console.log (err)
                )
            }
        );
        tbody.appendChild (
            tr
        );
        for (var j = 0; j < Object.keys(data[Object.keys(data)[i]]).length; j++) {
            let td = document.createElement (
                'td'
            );
            td.appendChild (
                document.createTextNode (
                    Object.values (data[Object.keys(data)[i]])[j]
                )
            );
            tr.appendChild (
                td
            );
        }
    }
}

var addNew = (tr,db,tb,data) => {
    let val = tr;
    let sortedkeys = Object.keys(data.columns);
    sortedkeys.sort();
    if (
        document.getElementById (
            "deldata"
        )
    ) {
        document.getElementById (
            "deldata"
        ).remove();
    }
    if (
        document.getElementById (
            "addline"
        )
    ) {
        document.getElementById (
            "addline"
        ).remove();
    }
    if (
        document.getElementById (
            "savedata"
        )
    ) {
        document.getElementById (
            "savedata"
        ).remove();
    }
    if (
        document.getElementById (
            "cancelop"
        )
    ) {
        document.getElementById (
            "cancelop"
        ).remove();
    }
    for (var i = 0; i < 1; i++) {
        let tr = document.createElement (
            'tr'
        );
        document.getElementById(
            "ubody"
        ).appendChild (
            tr
        );
        tr.id = "addline";
        for (var j = 0; j < sortedkeys.length; j++) {
            let td = document.createElement (
                'td'
            );
            let newval = document.createElement (
                'input'
            );
            newval.id = sortedkeys[j];
            if ( 
                val
            ){
                newval.value = val[j].textContent;
            }
            newval.placeholder = data.columns[sortedkeys[j]];
            newval.className = "form-control rounded-0";
            td.appendChild (
                newval
            );
            tr.appendChild (
                td
            );
        }
    }
    let snew = document.createElement (
        "a"
    ); 
    snew.className = "btn float-right btn-success m-3";
    snew.id = "savedata";
    snew.href = "javascript:void(0)";
    snew.textContent = "Guardar";
    snew.addEventListener (
        "click",
        () => {
            sendData(db,tb,data);
        }
    );
    document.getElementById("panel").appendChild (
        snew
    );
    if (
        val
    ) {
        let sedel = document.createElement (
            "a"
        ); 
        sedel.className = "btn float-right btn-danger m-3";
        sedel.id = "deldata";
        sedel.href = "javascript:void(0)";
        sedel.textContent = "Eliminar";
        sedel.addEventListener (
            "click",
            () => {
                delData(db,tb,data);
            }
        );
        document.getElementById("panel").appendChild (
            sedel
        );
    }
    let cnew = document.createElement (
        "a"
    ); 
    cnew.className = "btn float-right btn-secondary m-3";
    cnew.id = "cancelop";
    cnew.href = "javascript:void(0)";
    cnew.textContent = "Cancelar";
    cnew.addEventListener (
        "click",
        () => {
            if (
                document.getElementById (
                    "deldata"
                )
            ) {
                document.getElementById (
                    "deldata"
                ).remove();
            }
            if (
                document.getElementById (
                    "addline"
                )
            ) {
                document.getElementById (
                    "addline"
                ).remove();
            }
            if (
                document.getElementById (
                    "savedata"
                )
            ) {
                document.getElementById (
                    "savedata"
                ).remove();
            }
            if (
                document.getElementById (
                    "cancelop"
                )
            ) {
                document.getElementById (
                    "cancelop"
                ).remove();
            }
        }
    );
    document.getElementById("panel").appendChild (
        cnew
    );
}

var sendData = (db,tb,data) => {
    let data4send = {};
    for (var j = 0; j < Object.keys(data.columns).length; j++) {
        data4send[Object.keys (
            data.columns
        )[j]] = document.getElementById (
            Object.keys (
                data.columns
            )[j]).value;
    }
    firebase.database().ref (
        db
    ).child (
        tb
    ).child (
        document.getElementById(data.pk).value
    ).set (
        data4send
    ).then ( 
        () => {
            alert (
                "Agregado"
            );
            if (
                document.getElementById (
                    "savedata"
                )
            ) {
                document.getElementById (
                    "savedata"
                ).remove();
            }
            if (
                document.getElementById (
                    "deldata"
                )
            ) {
                document.getElementById (
                    "deldata"
                ).remove();
            }
            if (
                document.getElementById (
                    "addline"
                )
            ) {
                document.getElementById (
                    "addline"
                ).remove();
            }
            if (
                document.getElementById (
                    "cancelop"
                )
            ) {
                document.getElementById (
                    "cancelop"
                ).remove();
            }
            udata(db,tb);
        }
    ).catch ( 
        (Error) => {
            alert (
                Error
            );
        }
    );
}

var delData = (db,tb,data) => {
    firebase.database().ref (
        db
    ).child (
        tb
    ).child (
        document.getElementById(data.pk).value
    ).set (
        null
    ).then( 
        () => {
            alert (
                "Borrado"
            );
            if (
                document.getElementById (
                    "savedata"
                )
            ) {
                document.getElementById (
                    "savedata"
                ).remove();
            }
            if (
                document.getElementById (
                    "deldata"
                )
            ) {
                document.getElementById (
                    "deldata"
                ).remove();
            }
            if (
                document.getElementById (
                    "addline"
                )
            ) {
                document.getElementById (
                    "addline"
                ).remove();
            }
            if (
                document.getElementById (
                    "cancelop"
                )
            ) {
                document.getElementById (
                    "cancelop"
                ).remove();
            }
            udata(db,tb);
        }
    )
}

var getTableParam = () => {
    return fetch (
        "https://e5tebandido.github.io/Data/Users.json"
    ).then (
        res => res.json()
    ).then (
        data => (data) 
    ) 
}

