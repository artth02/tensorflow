const brain = require('brain.js')

//Exclusive OR

//input 0,0 output 0 
//input 0,1 output 1
//input 1,0 output 1
//input 1,1 output 0

const net = new brain.NeuralNetwork({ hiddenLayers: [2,2] })

const trainingData = [
    { input: [0, 0], output: [0] },
    { input: [0, 1], output: [1] },
    { input: [1, 0], output: [1] },
    { input: [1, 1], output: [0] }
]

net.train(trainingData, {
    log: (error) => console.log(error),
    logPeriod: 100
})

console.log(net.run([0, 0]))


//(inputs) => outputs

//Math.random()

// function relu(value) {
    // return value < 0 ? 0 : value
// }