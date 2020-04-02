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
    expect(arrayHolder.getElementByIndex(0)).toBe(array[0])
})

test("instance created", () => {
    let arrayHolder = new ArrayHolder()
    expect(arrayHolder.average()).toBe(0)
    expect(arrayHolder.geometricMean()).toBe(0)
    expect(arrayHolder.sum()).toBe(0)
    expect(arrayHolder.max()).toBe(0)
    expect(arrayHolder.min()).toBe(0)
    expect(() => {
        arrayHolder.removeElementByIndex(0)
    }).toThrow()
})

test("instance created and adding 1 value", () => {
    let arrayHolder = new ArrayHolder()
    let arr = [1]
    arrayHolder.set(arr)
    expect(arrayHolder.average()).toBe(1)
    expect(arrayHolder.geometricMean()).toBe(1)
    expect(arrayHolder.sum()).toBe(1)
    expect(arrayHolder.max()).toBe(1)
    expect(arrayHolder.min()).toBe(1)
    expect(arrayHolder.get()).toBe(arr)
    arrayHolder.clear()
    expect(arrayHolder.mul()).toBe(0)
})

test("Array=[1,2,3]. Deleted last value.", () => {
    let arrayHolder = new ArrayHolder()
    arrayHolder.set([1,2,3])
    arrayHolder.removeElementByIndex(2)
    expect(arrayHolder.average()).toBeCloseTo(1.5)
    expect(arrayHolder.geometricMean()).toBeCloseTo(Math.sqrt(2))
    expect(arrayHolder.sum()).toBe(3)
    expect(arrayHolder.max()).toBe(2)
    expect(arrayHolder.min()).toBe(1)
})