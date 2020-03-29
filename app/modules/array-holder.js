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
        if (typeof(this.arrayStore[index]) === "undefined") {
            throw new Error("Unexisting element. Cannot get element with index was given")
        }
        return this.arrayStore[index];
    }

    removeElementByIndex(index) {
        if (typeof(this.arrayStore[index]) === "undefined") {
            throw new Error("Array is epmty. Cannot delete element from epmty array")
        }
        return this.arrayStore.slice(index, 1);
    }

    sum() {
        if (this.arrayStore === []) {
            return 0
        }
        return this.arrayStore.reduce((a, b) => a + b);
    }

    average() {
        if (this.arrayStore === []) {
            return 0
        }
        return this.sum() / this.arrayStore.length;
    }

    geometricMean() {
        if (this.arrayStore === []) {
            return 0
        }
        return Math.pow(this.sum(), 1 / this.arrayStore.length);
    }

    min() {
        if (this.arrayStore === []) {
            return 0
        }
        return Math.min(...this.arrayStore);
    }

    max() {
        if (this.arrayStore === []) {
            return 0
        }
        return Math.max(...this.arrayStore);
    }
};