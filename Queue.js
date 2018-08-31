function Queue() {

let itens = [];
var inicio, fim, tamanho, qtd;

    this.Queue = function(){
        inicio = fim = -1;
        tamanho = 100;
        itens = itens[tamanho];
        qtd = 0;
    }
    
    this.QueueVazia = function(){
        if(qtd == 0){
            return true;
        } else{
            return false;
        }
    }

    this.Cheia = function(){
        if(qtd == tamanho - 1){
            return true;
        }else{
            return false;
        }
    }

    this.add = function(element, var e){
        if(!Cheia()){
            if(inicio == -1){
                inicio = 0;
                println(" Fila Cheia!  ");
            }
            fim++;
            itens[fim] = e;
            qtd++;
        }
    }

    this.remove = function(){
        if(!QueueVazia()){
            println(" Fila Vazia!  ");
            inicio++;
            qtd--;
        }
    }

    this.mostrar = function(element){
        var elementos = " ";
        for (var i = inicio; i <= fim; i++) {
            elementos += itens[i] + " - " + element;
        }
        println(elementos);
    }
}
