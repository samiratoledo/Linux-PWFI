document.addEventListener("click", function(event) {
    const isClickInsideGrid = event.target.closest(".conteudoCont > div");
    
    // Se o clique NÃO foi dentro de um dos grids
    if (!isClickInsideGrid) {
        // Remove a classe 'active' de todos os grids
        document.querySelectorAll(".conteudoCont > div")
            .forEach(div => div.classList.remove("active"));
    }
});

document.querySelectorAll(".conteudoCont > div").forEach(item => {
    item.addEventListener("click", function(event) {
        // Impede que o clique no grid ative o evento do body
        event.stopPropagation();
        
        // Remove a classe 'active' de todos os grids
        document.querySelectorAll(".conteudoCont > div")
            .forEach(div => div.classList.remove("active"));
        
        // Adiciona a classe 'active' apenas no grid clicado
        this.classList.add("active");
    });
});

