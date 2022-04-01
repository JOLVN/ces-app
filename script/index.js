import { loader } from './functions/loader.js'


class Index {

    constructor() {
        this.initEvents()
    }

    initEvents() {
        loader()
    }


}

new Index()