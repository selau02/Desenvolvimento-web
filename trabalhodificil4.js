function trocou(id) {
    document.getElementById('detalhe').innerText = repo.get(Number(id)).toString()
}

function formataJson( o ) {
    return "(" + o.RA + ") "+o.nome + " cargo: "+o.funcao.cargo
}
function mostraTodos(usuario) {
    var detalhe = document.getElementById("detalhe");
    detalhe.innerHTML = "";
  
    for (var i = 0; i < usuario.todos.length; i++) {
      var todo = usuario.todos[i];
      var divTodo = document.createElement("div");
      divTodo.innerHTML = "<h3>" + todo.titulo + "</h3>";
      divTodo.innerHTML += "<p>" + todo.descricao + "</p>";
      divTodo.innerHTML += "<p>Prioridade: " + todo.prioridade + "</p>";
      divTodo.innerHTML += "<p>Concluído: " + (todo.concluido ? "Sim" : "Não") + "</p>";
      detalhe.appendChild(divTodo);
    }
  }
  function mostraUsuarios() {
    var detalhe = document.getElementById("detalhe");
    detalhe.innerHTML = "";
  
    for (var i = 0; i < usuarios.length; i++) {
      var usuario = usuarios[i];
      var divUsuario = document.createElement("div");
      divUsuario.innerHTML = "<h2>" + usuario.nome + "</h2>";
      detalhe.appendChild(divUsuario);
  
      for (var j = 0; j < usuario.todos.length; j++) {
        var todo = usuario.todos[j];
        var divTodo = document.createElement("div");
        divTodo.innerHTML = "<h3>" + todo.titulo + "</h3>";
        divTodo.innerHTML += "<p>" + todo.descricao + "</p>";
        divTodo.innerHTML += "<p>Prioridade: " + todo.prioridade + "</p>";
        divTodo.innerHTML += "<p>Concluído: " + (todo.concluido ? "Sim" : "Não") + "</p>";
        detalhe.appendChild(divTodo);
      }
    }
  }
  function trocou(codigo) {
    var usuario = usuarios.find(u => u.codigo == codigo);
    if (usuario) {
      mostraTodos(usuario);
    }
  }
    
  

const repo = new Map()

console.log(users.length)
for( i = 0; i < users.length; i++) {
    console.log(users[i].name)
}
users.forEach(function(elemento) {
    console.log(elemento.name)
})
users.forEach((e)=>repo.set(e.id, new User(e) ))

console.log(repo)
