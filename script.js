var companys = [
    {
        "name": "biotronica",
        "nameApresentation": "Biotrônica",
        "description": "A Biotrônica é uma startup de São Carlos, voltada para IoT. Minha atuação foi montar o backend para a empresa utilizando o framework Django e inserindo a aplicação em uma Máquina Linode. Além disso, atuei na programação dos gateways da empresa, estes que eram Raspberry Pi.",
        "link": "https://biotronica.tech/"
    },
    {
        "name": "polarsapiens",
        "nameApresentation": "Polar Sapiens",
        "description": "A Polar Sapiens é uma empresa sediada em Florianólopis, voltada para gestão de riscos em saúde e segurança. Minha atuação se deu em disponibilizar uma aplicação Backend para a o aplicativo da empresa. Posteriormente coordenei uma pequena equipe de desenvolvedores e assumimos o desenvolvimento do aplicativo. ",
        "link": "https://www.polarsapiens.com/"
    },
    {
        "name": "vetor",
        "nameApresentation": "Vetor IT",
        "description": "Vetor IT foi a empresa que tercerizou o meu trabalho para a empresa MRM, voltada para campanhas de marketing. Nessa empresa atuei como pleno, trabalhando em um projeto que tinha como foco criar profiles dos clientes da GM Carros, usando Machine Learning, Postgres, AWS e Django.",
        "link": "http://www.vetorit.com.br/"
    },
]

function getCompany(name){
    for(var i in companys){
        if(companys[i].name == name){
            return companys[i]
        }
    }
    return -1
}

$("document").ready(function(){

    $('.aa img').mouseover(function () {
        
        $('.aa img').popover({
            placement : 'right',
            trigger: 'click hover',
            html : true,
        });
    })

    $('.company').click(function(){
        var name = $(this).attr("name")
        var obj = getCompany(name)
        console.log(obj)

        $("#modal-company-body #descriptrion").text(obj["description"])

        $("#modal-company-body #link").html(`
        Click e será redirecionado para <a href="${obj["link"]}" target="_blank" role="button" class="btn btn-dark" data-bs-toggle="popover" title="${obj["nameApresentation"]} Website">${obj["nameApresentation"]}</a> Website
        `)

        const myModal = new bootstrap.Modal(document.getElementById('mymodal'), {"focus": true})

        myModal.show()

        //$("#mymodal").show()
    })

})