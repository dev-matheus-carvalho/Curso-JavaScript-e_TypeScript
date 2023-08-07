function Calculadora(){
    this.display = document.querySelector('.display');
    
    this.inicia = () => {
        this.capturaCliques();
        this.capturaEnter();
    };

    this.capturaEnter = () => {
        document.addEventListener('keyup', event => {
            if(event.key !== 'Enter') return;
            this.realizaConta();
        });
    };

    this.capturaCliques = () => {
        document.addEventListener('click', event => {
            const element = event.target;
            if(element.classList.contains('btn-num')) this.addNumDisplay(element);
            if(element.classList.contains('btn-clear')) this.clear();
            if(element.classList.contains('btn-del')) this.delete();
            if(element.classList.contains('btn-eq')) this.realizaConta();
        });
    };

    this.clear = () => this.display.value = '';
    this.delete = () => this.display.value = this.display.value.slice(0, -1);
    
    this.addNumDisplay = element => {
        this.display.value += element.innerText;
        this.display.focus();
    };
    
    this.realizaConta = () => {
        try {
            const conta = eval(this.display.value);

            if(!conta) {
                alert('Conta inválida');
                this.clear();
                return;
            }

            this.display.value = conta;
        } catch(error) {
            alert('Conta inválida');
            this.clear();
            return;
        }
    };
}

const calculadora = new Calculadora();
calculadora.inicia();