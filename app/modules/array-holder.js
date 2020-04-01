export default class ArrayHolder {

    constructor(initialArray = []) {
        this.arrayStore = initialArray;
    }

    set(array) {
        this.arrayStore = array;
    }
	
	get() {
		return this.arrayStore;
	}

    clear() {
        this.arrayStore = [];
    }

    getElementByIndex(index) {
        if (this.arrayStore.length == 0) {
            throw new Error("Unexisting element. Cannot get element with index was given")
        }
        return this.arrayStore[index];
    }

    removeElementByIndex(index) {
        if (this.arrayStore.length == 0) {
            throw new Error("Array is epmty. Cannot delete element from epmty array")
        }
        return this.arrayStore.slice(index, 1);
    }

    sum() {
        if (this.arrayStore.length == 0) {
            return 0
        }
        return this.arrayStore.reduce((a, b) => a + b);
    }

    average() {
        if (this.arrayStore.length == 0) {
            return 0
        }
        return this.sum() / this.arrayStore.length;
    }

    geometricMean() {
        if (this.arrayStore.length == 0) {
            return 0
        }
        return Math.pow(this.sum(), 1 / this.arrayStore.length);
    }

    min() {
        if (this.arrayStore.length == 0) {
            return 0
        }
        return Math.min(...this.arrayStore);
    }

    max() {
        if (this.arrayStore.length == 0) {
            return 0
        }
        return Math.max(...this.arrayStore);
    }
};