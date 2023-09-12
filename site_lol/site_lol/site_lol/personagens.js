

//SERAPHINE
function mostrarDados1() {
    const jsontime= '{"nomeCampeao": "Seraphine", "regiao": "Piltover", "lane": "Bot Sup"}';

    //Verificar console
    console.log(jsontime);
    //Transformando em JSON - Objeto JavaScript
    const data = JSON.parse(jsontime)
    //Verificar console2
    console.log(data);

    //Verificar navegador - Front End
    document.getElementById("dados1").innerHTML+=
    "<p>Nome do Campeão: " +data.nomeCampeao+ "</p>" + 
    "<p>Região: " +data.regiao+ "</p>" + 
    "<p>Lane: " +data.lane+ "</p>"
  }

    //MASTER YI
    function mostrarDados2() {
      const jsontime= '{"nomeCampeao": "Master Yi", "regiao": "Ionia", "lane": "Jungle" }';
    
      //Verificar console
      console.log(jsontime);
      //Transformando em JSON - Objeto JavaScript
      const data = JSON.parse(jsontime)
      //Verificar console2
      console.log(data);

      //Verificar navegador - Front End
      document.getElementById("dados2").innerHTML+=
      "<p>Nome do Campeão: " +data.nomeCampeao+ "</p>" + 
      "<p>Região: " +data.regiao+ "</p>" + 
      "<p>Lane: " +data.lane+ "</p>"
    
    }
       //LUX
    function mostrarDados3() {
      const jsontime= '{"nomeCampeao": "Lux", "regiao": "Demacia", "lane": "Mid"}';

      //Verificar console
      console.log(jsontime);
      //Transformando em JSON - Objeto JavaScript
      const data = JSON.parse(jsontime)
      //Verificar console2
      console.log(data);

      //Verificar navegador - Front End
      document.getElementById("dados3").innerHTML+=
      "<p>Nome do Campeão: " +data.nomeCampeao+ "</p>" + 
      "<p>Região: " +data.regiao+ "</p>" + 
      "<p>Lane: " +data.lane+ "</p>"
    }

       //KAYN
    function mostrarDados4() {
      const jsontime= '{"nomeCampeao": "Kayn", "regiao": "Noxus", "lane": "Jungle"}';

      //Verificar console
      console.log(jsontime);
      //Transformando em JSON - Objeto JavaScript
      const data = JSON.parse(jsontime)
      //Verificar console2
      console.log(data);

      //Verificar navegador - Front End
      document.getElementById("dados4").innerHTML+=
      "<p>Nome do Campeão: " +data.nomeCampeao+ "</p>" + 
      "<p>Região: " +data.regiao+ "</p>" + 
      "<p>Lane: " +data.lane+ "</p>"
    }

