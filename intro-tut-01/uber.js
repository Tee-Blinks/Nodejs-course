let availableUber = true;
const clientMakeOrder = false;

const uberReady = () => {
    if (availableUber && clientMakeOrder) console.log('uber is ready to mover');
    else console.log('uber is not ready');
};

const FuelMinLimit = 50
const  fuelMaxLimit = 250

const FuelLimit = (minError, maxError) => {
    if (FuelMinLimit <= 50) return minError;
    else if (fuelMaxLimit => 250) return maxError;
    else console.log('fuel limitation is cool, we can ride on')
}
module.exports = {uberReady, FuelLimit}