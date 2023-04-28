var udata = (db,tb) => {
    runFire();
    firebase.database().ref (
        db
    ).child (
        tb
    ).once (
        'value', 
        response => {
            createTable(db,tb);
            addUHead (
                response.val()
            );
            addUBody(
                response.val()
            );
            $(
                '#utable'
            ).DataTable();
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
            "savedata"
        )
    ) {
        document.getElementById (
            "savedata"
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
                    addNewU(db,tb,users[tb].columns);
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

var addUBody = (data) => {
    let tbody = document.getElementById("ubody");
    for (var i = 0; i < Object.keys(data).length; i++) {
        let tr = document.createElement (
            'tr'
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

var addNewU = (db,tb,columns) => {
    let sortedkeys = Object.keys(columns);
    sortedkeys.sort();
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
            newval.placeholder = columns[sortedkeys[j]];
            newval.className="form-control rounded-0";
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
            sendData(db,tb,columns);
        }
    );
    document.getElementById("panel").appendChild (
        snew
    );
}

var sendData = (db,tb,columns) => {
    let data4send = {};
    for (var j = 0; j < Object.keys(columns).length; j++) {
        data4send[Object.keys(columns)[j]] = document.getElementById(Object.keys(columns)[j]).value;
    }
    runFire();
    firebase.database().ref (
        db
    ).child (
        tb
    ).push (
        data4send
    )
    .then( () => {
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
                "addline"
            )
        ) {
            document.getElementById (
                "addline"
            ).remove();
        }
    })
    .catch( (Error) =>{
        console.log(Error);
    });
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