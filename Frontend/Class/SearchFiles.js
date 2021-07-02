import Path from 'path';

class SearchFiles {

    constructor() {
        this.search = function () {
            return Path.join(Path.resolve(), ...arguments)
        }
    }

    __Views() {
        return this.search('Frontend', 'Views', ...arguments);
    }

}

export default new SearchFiles();