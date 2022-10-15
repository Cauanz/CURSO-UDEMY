//funcao de callback
// 1000 = 1 seg, 3000 = 3seg / para simular o tempo de carregamento da web
function rand(min = 1000, max = 3000) {
const num = Math.random() * (max - min) + min;
return Math.floor(num);
}
console.log('Ola Mundo!')

function f1(callback) {
  setTimeout(function() {
    console.log('f1');
    if (callback) callback();
  }, rand());
}

function f2(callback) {
  setTimeout(function() {
    console.log('f2');
    if (callback) callback();
  }, rand());
}

function f3(callback) {
  setTimeout(function() {
    console.log('f3');
    if (callback) callback();
  }, rand());
}


//callback hell = inferno do callback = porque vira uma arvore de natal de callback's
f1(function() {
  f2(function() {
    f3(function() {
      console.log('Ola mundo!');
    });
  });
});

//maneira melhor de chamar um callback
f1(f1Callback);

function f1Callback() {
  f2(f2Callback);
}

function f2Callback() {
  f3(f3Callback);
}

function f3Callback() {
  console.log('Ola mundo!');
}

