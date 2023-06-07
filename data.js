// Gerar opções para os dias
var selectDia = document.getElementById("dia");
for (var i = 1; i <= 31; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  selectDia.appendChild(option);
}

// Gerar opções para os meses
var selectMes = document.getElementById("mes");
var meses = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
  'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];
for (var i = 0; i < meses.length; i++) {
  var option = document.createElement("option");
  option.value = i + 1;
  option.text = meses[i];
  selectMes.appendChild(option);
}

// Gerar opções para os anos
var selectAno = document.getElementById("ano");
var anoAtual = new Date().getFullYear();
for (var i = anoAtual; i >= 1930; i--) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  selectAno.appendChild(option);
}

var selectDia = document.getElementById("dia-dois");
for (var i = 1; i <= 31; i++) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  selectDia.appendChild(option);
}

// Gerar opções para os meses
var selectMes = document.getElementById("mes-dois");
var meses = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho',
  'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];
for (var i = 0; i < meses.length; i++) {
  var option = document.createElement("option");
  option.value = i + 1;
  option.text = meses[i];
  selectMes.appendChild(option);
}

// Gerar opções para os anos
var selectAno = document.getElementById("ano-dois");
var anoAtual = new Date().getFullYear();
for (var i = anoAtual; i >= 1930; i--) {
  var option = document.createElement("option");
  option.value = i;
  option.text = i;
  selectAno.appendChild(option);
}