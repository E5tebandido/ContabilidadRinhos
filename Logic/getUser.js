var udata = () => {
    runFire();
    firebase.database().ref (
        "Rinhosdata"
    ).child (
        "Athletes"
    ).once (
        'value', 
        response => {
            createTable();
            addUHead (
                response.val()
            );
            addUBody(
                response.val()
            );
        }
    )
}

var createTable = () => {
    if (document.getElementById (
        "utable"
        ) && document.getElementById (
            "insertnewr"
        )
    ) {
        document.getElementById (
            "utable"
        ).remove();
        document.getElementById (
            "insertnewr"
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
    table.className = "table table-bordered";
    tnew.className = "btn rounded-0 btn-block";
    tnew.id = "insertnewr";
    tnew.href = "javascript:void(0)";
    tnew.textContent = "Agregar nuevo";
    tnew.setAttribute("onClick","addNewU(9)");
    document.getElementById (
        "panel"
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
        console.log(thead.childNodes);
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
    console.log(thead);
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
                    Object.values(data[Object.keys(data)[i]])[j]
                )
            );
            tr.appendChild (
                td
            );
        }
        
    }
}

var addNewU = (numcol) => {
    for (var i = 0; i < 1; i++) {
        let tr = document.createElement (
            'tr'
        );
        document.getElementById("ubody").appendChild (
            tr
        );
        for (var j = 0; j < numcol; j++) {
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
    let snew = document.createElement (
        "a"
    ); 
    snew.className = "btn rounded-0 btn-block";
    snew.id = "savedata";
    snew.href = "javascript:void(0)";
    snew.textContent = "Guardar";
    snew.setAttribute("onClick","sendData()");
    document.getElementById("panel").appendChild (
        snew
    );
}

var sendData = () => {
        runFire();
        firebase.database().ref("Rinhosdata").child("Athletes").child(document.getElementById("val0").value).set({
            "Doc":document.getElementById("val0").value,
            "Name":document.getElementById("val1").value,
            "Cat":document.getElementById("val2").value,
            "Num":document.getElementById("val3").value,
            "Stp":document.getElementById("val4").value,
        })
        .then( () => {
            udata();
            if (
                document.getElementById (
                    "savedata"
                )
            ) {
                document.getElementById (
                    "savedata"
                ).remove();
            }
        })
        .catch( () =>{
            console.log("Error cargando en firebase");
        });
}