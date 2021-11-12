const cliente = {
    nome:'Rafael',
    idade:36,
    cpf:16005981706,
    email:'brandaofx@gmail.com  ',
    fones: ['996861886'],
    dependentes:'Fabiana'[
        {
            nome:'Maria',
            parentesco:'Filha',
            datanasc:'21/04/1985'},
        {
            nome:'Carla',
            parentesco:'Irmã',
            datanasc:'22/04/1984',

        }    
        
    ], 
    saldo:100,
    depositar:function(valor){
        this.saldo += valor
    }
}

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)