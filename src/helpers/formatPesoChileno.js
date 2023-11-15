export const formatPesoChileno = (numero) => {
    if (Number.isInteger(numero)) {
        return numero.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    } else {
        const partes = numero.toString().split('.');
        const parteEntera = partes[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
        const parteDecimal = partes[1] || '00';

        return `${parteEntera},${parteDecimal}`;
    }
}