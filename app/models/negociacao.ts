export class Negociacao {
    privete_data;
    privete_quantidade;
    privete_valor;

    constructor(data, quantidade, valor) {
        this.privete_data = data;
        this.privete_quantidade = quantidade;
        this.privete_valor = valor;
    }

    get data() {
        return this.privete_data;
    }

    get quantidade() {
        return this.privete_quantidade;
    }

    get valor() {
        return this.privete_valor;
    }

    get volume() {
        return this.privete_quantidade * this.privete_valor;
    }
}