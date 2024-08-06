/*Funções a serem testadas
function validarSenha() {
    var senha = document.getElementById("senha").value;
    var confirmacaoSenha = document.getElementById("confirmacaoSenha").value;
  
    var regexLetraMinuscula = /[a-z]/;
    var regexLetraMaiuscula = /[A-Z]/;
    var regexNumero = /[0-9]/;
    var regexCaracterEspecial = /[!@#$%^&*]/;
  
    if (senha.length < 8) {
      return false;
    }
  
    if (!regexLetraMinuscula.test(senha)) {
      return false;
    }
  
    if (!regexLetraMaiuscula.test(senha)) {
      return false;
    }
  
    if (!regexNumero.test(senha)) {
      return false;
    }
  
    if (!regexCaracterEspecial.test(senha)) {
      return false;
    }
  
    if (senha !== confirmacaoSenha) {
      return false;
    }
  
    return true;
  }
  
  function validarIdade() {
    var idade = document.getElementById('idade').value;
    return idade >= 18;
  }
  
  function mostrarCidades() {
    var estado = document.getElementById("estado").value;
    var selectCidades = document.getElementById("cidades");
  
    while (selectCidades.options.length > 1) {
      selectCidades.remove(1);
    }
  
    switch (estado) {
      case "SP":
        adicionarOpcao(selectCidades, "São Paulo");
        adicionarOpcao(selectCidades, "Campinas");
        adicionarOpcao(selectCidades, "Santos");
        break;
      case "RJ":
        adicionarOpcao(selectCidades, "Rio de Janeiro");
        adicionarOpcao(selectCidades, "Niterói");
        adicionarOpcao(selectCidades, "Duque de Caxias");
        break;
      case "MG":
        adicionarOpcao(selectCidades, "Belo Horizonte");
        adicionarOpcao(selectCidades, "Uberlândia");
        adicionarOpcao(selectCidades, "Juiz de Fora");
        break;
      case "ES":
        adicionarOpcao(selectCidades, "Vitória");
        adicionarOpcao(selectCidades, "Vila Velha");
        adicionarOpcao(selectCidades, "Cariacica");
        break;
      default:
        break;
    }
  }
  
  function adicionarOpcao(select, texto) {
    var option = document.createElement("option");
    option.text = texto;
    select.add(option);
  }
  
  // Testes
 
  /*
  document.body.innerHTML = `
        <form id="formCadastro">
          <input type="password" id="senha" value="Senha@123" />
          <input type="password" id="confirmacaoSenha" value="Senha@123" />
        </form>
        <form id="formIdade">
          <input type="number" id="idade" value="17" />
        </form>
        <form>
          <select id="estado">
            <option value="">Selecione...</option>
            <option value="SP">São Paulo</option>
            <option value="RJ">Rio de Janeiro</option>
          </select>
          <select id="cidades">
            <option value="">Selecione um estado primeiro</option>
          </select>
        </form>
      `;
    });

  

   
    test('validarSenha deve retornar false para senhas inválidas', () => {
        document.getElementById('senha').value = '123';
        document.getElementById('confirmacaoSenha').value = '123';
  
        expect(validarSenha(senha!=confirmacaoSenha)).toBe(false);
      });
    
      test('validarSenha deve retornar true para senhas válidas', () => {
        document.getElementById('senha').value = 'Senha@123';
        document.getElementById('confirmacaoSenha').value = 'Senha@123';
  
        expect(validarSenha(senha==confirmacaoSenha)).toBe(true);
      });
    
      test('validarIdade deve retornar false para idade abaixo de 18', () => {
        document.getElementById('idade').value = '17';
        expect(validarIdade(17)).toBe(false);
      });
    
      test('validarIdade deve retornar true para idade de 18 ou mais', () => {
        document.getElementById('idade').value = '18';
        expect(validarIdade(18)).toBe(true);
      });
    
      test('mostrarCidades deve preencher o select de cidades corretamente para SP', () => {
        document.getElementById('estado').value = 'SP';
        mostrarCidades(SP);
  
        expect(Estado(SP)).toBe(true);
  
        const options = Array.from(document.getElementById('cidades').options).map(option => option.text);
        expect(options).toEqual(['Selecione um estado primeiro', 'São Paulo', 'Campinas', 'Santos']);
      });
    
      test('mostrarCidades deve preencher o select de cidades corretamente para RJ', () => {
        document.getElementById('estado').value = 'RJ';
        mostrarCidades(RJ);
  
        expect(estado(RJ)).toBe(true);
  
        const options = Array.from(document.getElementById('cidades').options).map(option => option.text);
        expect(options).toEqual(['Selecione um estado primeiro', 'Rio de Janeiro', 'Niterói', 'Duque de Caxias']);
      });
    
      test('mostrarCidades deve manter apenas a opção inicial se nenhum estado for selecionado', () => {
        document.getElementById('estado').value = 'none';
        mostrarCidades();
  
        expect(estado()).toBe(false);
  
        const options = Array.from(document.getElementById('cidades').options).map(option => option.text);
        expect(options).toEqual(['Selecione um estado primeiro']);
      });
    */ 
   const sum= require('./cadastro.html')
   test('primeira linha de teste',()=>{
    expect(sum()).toBe(true)
   })
      

  