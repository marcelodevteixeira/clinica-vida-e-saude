document.addEventListener("DOMContentLoaded", function() {
    const especialidadeSelect = document.getElementById("especialidade");
    const profissionalSelect = document.getElementById("profissional");
  
   
    const profissionais = {
      "clinico-geral": [
        { nome: "Dra. Ana Paula", id: "ana-paula" },
        { nome: "Dr. Carlos Henrique", id: "carlos-henrique" }
      ],
      "cardiologia": [
        { nome: "Dr. Carlos Henrique", id: "carlos-henrique" }
      ],
      "nutricao": [
        { nome: "Dra. Fernanda Lima", id: "fernanda-lima" }
      ],
      "ortopedia": [
        { nome: "Dr. Carlos Henrique", id: "carlos-henrique" }
      ]
    };
  
    function updateProfissionais() {
      profissionalSelect.innerHTML = "<option value='' selected disabled hidden>Selecione o profissional</option>";
  
      const especialidade = especialidadeSelect.value;
  
      if (especialidade && profissionais[especialidade]) {
        profissionais[especialidade].forEach(profissional => {
          const option = document.createElement("option");
          option.value = profissional.id;
          option.textContent = profissional.nome;
          profissionalSelect.appendChild(option);
        });
  
        profissionalSelect.value = profissionais[especialidade][0].id;
      }
    }
  
    especialidadeSelect.addEventListener("change", updateProfissionais);
  
    updateProfissionais();
  });

  document.getElementById('sobre').addEventListener('click', function () {
    document.querySelectorAll('section').forEach(function (section) {
      section.style.display = 'none';
    });
  
    document.getElementById('sobre-clinica').style.display = 'block';
  });
  
  
  
  
  
  
  