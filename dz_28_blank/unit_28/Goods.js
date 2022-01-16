class Goods {
    constructor(name, amount, image, count) {
        this.name = name;
        this.amount = amount;
        this.image = image;
        this.count = count;
    }
    draw() {
        let div = document.createElement('div');
        let p = document.createElement('p');
        let image = document.createElement('img');
        let p2 = document.createElement('p');
        let p3 = document.createElement('p');

        p.innerHTML = this.name;
        image.src = this.image;
        p2.innerHTML = this.amount;
        p3.innerHTML = this.count;
        div.append(p);
        div.append(image);
        div.append(p2, p3);

        return div;
    }
}