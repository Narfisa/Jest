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