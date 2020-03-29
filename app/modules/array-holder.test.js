import ArrayHolder from "./array-holder.js"

const array = [1,2,3]

test("get unexisting element", () => {
    let arrayHolder = new ArrayHolder()
    expect(() => {
        arrayHolder.getElementByIndex(0)
    }).toThrow()
})

test("get element by index", () => {
    let arrayHolder = new ArrayHolder()
    arrayHolder.set(array)
    expect(() => {
        arrayHolder.getElementByIndex(0)
    }).toBe(array[0])
})

test("instance created", () => {
    let arrayHolder = new ArrayHolder()
    expect(() => {
        arrayHolder.average()
    }).toBe(0)
    expect(() => {
        arrayHolder.geometricMean()
    }).toBe(0)
    expect(() => {
        arrayHolder.sum()
    }).toBe(0)
    expect(() => {
        arrayHolder.max()
    }).toBe(0)
    expect(() => {
        arrayHolder.min()
    }).toBe(0)
})