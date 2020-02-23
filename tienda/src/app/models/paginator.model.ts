export class Paginator {
    page: number;
    size: number;

    constructor(page = 0, size = 10) {
        this.page = page;
        this.size = size;
    }
}
