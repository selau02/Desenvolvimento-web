function trocou(id) {
    document.getElementById('detalhe').innerText = repo.get(Number(id)).toString()
}

function formataJson( o ) {
    return "(" + o.RA + ") "+o.nome + " cargo: "+o.funcao.cargo
}
/*Aqui eu criei uma função com o inutuito de mostrar os usuarios, utilizando var e for*/
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
/*Nessa parte eu criei outra função para trocar o codigo*/

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
