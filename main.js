if (typeof kotlin === 'undefined') {
  throw new Error("Error loading module 'main'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'main'.");
}var main = function (_, Kotlin) {
  'use strict';
  var throwCCE = Kotlin.throwCCE;
  var equals = Kotlin.equals;
  var Unit = Kotlin.kotlin.Unit;
  var jogador;
  var rodadas;
  function checarFinal$lambda(closure$botao1) {
    return function () {
      window.alert('Jogador ' + closure$botao1.innerHTML + ' venceu!');
      return Unit;
    };
  }
  function checarFinal$lambda_0() {
    window.location.reload();
    return Unit;
  }
  function checarFinal$lambda_1(closure$botao4) {
    return function () {
      window.alert('Jogador ' + closure$botao4.innerHTML + ' venceu!');
      return Unit;
    };
  }
  function checarFinal$lambda_2() {
    window.location.reload();
    return Unit;
  }
  function checarFinal$lambda_3(closure$botao7) {
    return function () {
      window.alert('Jogador ' + closure$botao7.innerHTML + ' venceu!');
      return Unit;
    };
  }
  function checarFinal$lambda_4() {
    window.location.reload();
    return Unit;
  }
  function checarFinal$lambda_5(closure$botao1) {
    return function () {
      window.alert('Jogador ' + closure$botao1.innerHTML + ' venceu!');
      return Unit;
    };
  }
  function checarFinal$lambda_6() {
    window.location.reload();
    return Unit;
  }
  function checarFinal$lambda_7(closure$botao2) {
    return function () {
      window.alert('Jogador ' + closure$botao2.innerHTML + ' venceu!');
      return Unit;
    };
  }
  function checarFinal$lambda_8() {
    window.location.reload();
    return Unit;
  }
  function checarFinal$lambda_9(closure$botao3) {
    return function () {
      window.alert('Jogador ' + closure$botao3.innerHTML + ' venceu!');
      return Unit;
    };
  }
  function checarFinal$lambda_10() {
    window.location.reload();
    return Unit;
  }
  function checarFinal$lambda_11(closure$botao1) {
    return function () {
      window.alert('Jogador ' + closure$botao1.innerHTML + ' venceu!');
      return Unit;
    };
  }
  function checarFinal$lambda_12() {
    window.location.reload();
    return Unit;
  }
  function checarFinal$lambda_13(closure$botao3) {
    return function () {
      window.alert('Jogador ' + closure$botao3.innerHTML + ' venceu!');
      return Unit;
    };
  }
  function checarFinal$lambda_14() {
    window.location.reload();
    return Unit;
  }
  function checarFinal$lambda_15() {
    window.alert('Velha.');
    return Unit;
  }
  function checarFinal$lambda_16() {
    window.location.reload();
    return Unit;
  }
  function checarFinal() {
    var tmp$, tmp$_0, tmp$_1, tmp$_2, tmp$_3, tmp$_4, tmp$_5, tmp$_6, tmp$_7;
    var botao1 = Kotlin.isType(tmp$ = document.getElementById('b1'), HTMLDivElement) ? tmp$ : throwCCE();
    var botao2 = Kotlin.isType(tmp$_0 = document.getElementById('b2'), HTMLDivElement) ? tmp$_0 : throwCCE();
    var botao3 = Kotlin.isType(tmp$_1 = document.getElementById('b3'), HTMLDivElement) ? tmp$_1 : throwCCE();
    var botao4 = Kotlin.isType(tmp$_2 = document.getElementById('b4'), HTMLDivElement) ? tmp$_2 : throwCCE();
    var botao5 = Kotlin.isType(tmp$_3 = document.getElementById('b5'), HTMLDivElement) ? tmp$_3 : throwCCE();
    var botao6 = Kotlin.isType(tmp$_4 = document.getElementById('b6'), HTMLDivElement) ? tmp$_4 : throwCCE();
    var botao7 = Kotlin.isType(tmp$_5 = document.getElementById('b7'), HTMLDivElement) ? tmp$_5 : throwCCE();
    var botao8 = Kotlin.isType(tmp$_6 = document.getElementById('b8'), HTMLDivElement) ? tmp$_6 : throwCCE();
    var botao9 = Kotlin.isType(tmp$_7 = document.getElementById('b9'), HTMLDivElement) ? tmp$_7 : throwCCE();
    var mostrador = document.querySelector('h2');
    if (equals(botao1.innerHTML, botao2.innerHTML) && equals(botao1.innerHTML, botao3.innerHTML) && equals(botao2.innerHTML, botao3.innerHTML)) {
      window.setTimeout(checarFinal$lambda(botao1), 150);
      window.setTimeout(checarFinal$lambda_0, 151);
      if (mostrador != null) {
        mostrador.innerHTML = 'Fim de Jogo!';
      }} else if (equals(botao4.innerHTML, botao5.innerHTML) && equals(botao4.innerHTML, botao6.innerHTML) && equals(botao5.innerHTML, botao6.innerHTML)) {
      window.setTimeout(checarFinal$lambda_1(botao4), 150);
      window.setTimeout(checarFinal$lambda_2, 151);
      if (mostrador != null) {
        mostrador.innerHTML = 'Fim de Jogo!';
      }} else if (equals(botao7.innerHTML, botao8.innerHTML) && equals(botao7.innerHTML, botao9.innerHTML) && equals(botao8.innerHTML, botao9.innerHTML)) {
      window.setTimeout(checarFinal$lambda_3(botao7), 150);
      window.setTimeout(checarFinal$lambda_4, 151);
      if (mostrador != null) {
        mostrador.innerHTML = 'Fim de Jogo!';
      }} else if (equals(botao1.innerHTML, botao4.innerHTML) && equals(botao1.innerHTML, botao7.innerHTML) && equals(botao4.innerHTML, botao7.innerHTML)) {
      window.setTimeout(checarFinal$lambda_5(botao1), 150);
      window.setTimeout(checarFinal$lambda_6, 151);
      if (mostrador != null) {
        mostrador.innerHTML = 'Fim de Jogo!';
      }} else if (equals(botao2.innerHTML, botao5.innerHTML) && equals(botao2.innerHTML, botao8.innerHTML) && equals(botao5.innerHTML, botao8.innerHTML)) {
      window.setTimeout(checarFinal$lambda_7(botao2), 150);
      window.setTimeout(checarFinal$lambda_8, 151);
      if (mostrador != null) {
        mostrador.innerHTML = 'Fim de Jogo!';
      }} else if (equals(botao3.innerHTML, botao6.innerHTML) && equals(botao3.innerHTML, botao9.innerHTML) && equals(botao6.innerHTML, botao9.innerHTML)) {
      window.setTimeout(checarFinal$lambda_9(botao3), 150);
      window.setTimeout(checarFinal$lambda_10, 151);
      if (mostrador != null) {
        mostrador.innerHTML = 'Fim de Jogo!';
      }} else if (equals(botao1.innerHTML, botao5.innerHTML) && equals(botao1.innerHTML, botao9.innerHTML) && equals(botao5.innerHTML, botao9.innerHTML)) {
      window.setTimeout(checarFinal$lambda_11(botao1), 150);
      window.setTimeout(checarFinal$lambda_12, 151);
      if (mostrador != null) {
        mostrador.innerHTML = 'Fim de Jogo!';
      }} else if (equals(botao3.innerHTML, botao5.innerHTML) && equals(botao3.innerHTML, botao7.innerHTML) && equals(botao5.innerHTML, botao7.innerHTML)) {
      window.setTimeout(checarFinal$lambda_13(botao3), 150);
      window.setTimeout(checarFinal$lambda_14, 151);
      if (mostrador != null) {
        mostrador.innerHTML = 'Fim de Jogo!';
      }} else if (rodadas === 9) {
      window.setTimeout(checarFinal$lambda_15, 150);
      window.setTimeout(checarFinal$lambda_16, 151);
      if (mostrador != null) {
        mostrador.innerHTML = 'Fim de Jogo!';
      }}}
  function click(id) {
    var tmp$, tmp$_0;
    if (jogador === 1) {
      var botao = Kotlin.isType(tmp$ = document.getElementById(id), HTMLDivElement) ? tmp$ : throwCCE();
      var mostrador = document.querySelector('h2');
      botao.innerHTML = 'X';
      botao.style.color = 'rgb(3, 151, 114)';
      if (mostrador != null) {
        mostrador.innerHTML = 'Vez do jogador: O';
      }jogador = 2;
    } else {
      var botao_0 = Kotlin.isType(tmp$_0 = document.getElementById(id), HTMLDivElement) ? tmp$_0 : throwCCE();
      var mostrador_0 = document.querySelector('h2');
      botao_0.innerHTML = 'O';
      if (mostrador_0 != null) {
        mostrador_0.innerHTML = 'Vez do jogador: X';
      }jogador = 1;
    }
    rodadas = rodadas + 1 | 0;
    checarFinal();
  }
  Object.defineProperty(_, 'jogador', {
    get: function () {
      return jogador;
    },
    set: function (value) {
      jogador = value;
    }
  });
  Object.defineProperty(_, 'rodadas', {
    get: function () {
      return rodadas;
    },
    set: function (value) {
      rodadas = value;
    }
  });
  _.checarFinal = checarFinal;
  _.click = click;
  jogador = 1;
  rodadas = 0;
  Kotlin.defineModule('main', _);
  return _;
}(typeof main === 'undefined' ? {} : main, kotlin);
