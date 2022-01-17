class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);
        this.sale = sale;
    }
    draw() {
        let sale = super.draw();
        let p = document.createElement('p');
        p.innerHTML = this.sale;
        sale.append(p);

        return sale;
    }
}