class Goods2 extends Goods {
    constructor(name, amount, image, count, sale) {
        super(name, amount, image, count);
        this.sale = sale;
    }
    draw() {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let image = document.createElement('img');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');
        let p4 = document.createElement('p');

        p.innerHTML = this.name;
        image.src = this.image;
        p2.innerHTML = this.amount;
        p3.innerHTML = this.count;
        p4.innerHTML = this.sale;
        div.append(p);
        div.append(image);
        div.append(p2, p3);
        div.append(p4);

        return div;
    }
}