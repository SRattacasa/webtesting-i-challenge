const enhancer = require('./enhancer.js');

// test away!


    it("Has been repaired", () => { 
        expect(enhancer.repair({
            name: "Hat",
            durability: 75,
            enhancement: 18,
        }))
        .toEqual({
            name: "Hat",
            durability: 100,
            enhancement: 18,
        })
    })

    it("Has been succeeded", () => { 
        expect(enhancer.success({
            name: "Hat",
            durability: 75,
            enhancement: 18,
        }))
        .toEqual({
            name: "Hat",
            durability: 75,
            enhancement: 19,
        })
    })

    it("Has been failed", () => { 
        expect(enhancer.fail({
            name: "Hat",
            durability: 75,
            enhancement: 18,
        }))
        .toEqual({
            name: "Hat",
            durability: 65,
            enhancement: 17,
        })
    })
 