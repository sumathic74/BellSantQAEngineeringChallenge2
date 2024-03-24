const app = require('express')()
import request from 'supertest'
const baseUrl = 'http://localhost:3001'

describe('calculateMachineHealthAsAPI',  () => {
  it('calculates machine health as API', async () => {
    const input = '{ "machines": {"weldingRobot": {"errorRate": "0.55", "vibrationLevel": "3.00"}}}'
    const res =  await request(baseUrl).post('/machine-health').set('Content-type', 'application/json').send(input)

    expect (res.status).toBe(200)
    expect(res.body.factory).toEqual("75.00");
    expect(res.body.machineScores.weldingRobot).toEqual("75.00");
  })

  it('calculates machine health correctly all optimal as API', async () => {
    const input = '{ "machines": {"weldingRobot": {"errorRate": "0.01", "vibrationLevel": "0.01", "electrodeWear": "0.01"}}}'
    const res =  await request(baseUrl).post('/machine-health').set('Content-type', 'application/json').send(input)

    expect (res.status).toBe(200)
    expect(res.body.factory).toEqual("100.00");
    expect(res.body.machineScores.weldingRobot).toEqual("100.00");

  });  

  it('calculates machine health correctly all normal as API', async () => {
    const input = '{ "machines": {"weldingRobot": {"errorRate": "0.55", "vibrationLevel": "3", "electrodeWear": "0.55"}}}'
    const res =  await request(baseUrl).post('/machine-health').set('Content-type', 'application/json').send(input)

    expect (res.status).toBe(200)
    expect(res.body.factory).toEqual("75.00");
    expect(res.body.machineScores.weldingRobot).toEqual("75.00");

  });  

  it('calculates machine health correctly all abnormal as API', async () => {
    const input = '{ "machines": {"weldingRobot": {"errorRate": "1.55", "vibrationLevel": "7.55", "electrodeWear": "1.55"}}}'
    const res =  await request(baseUrl).post('/machine-health').set('Content-type', 'application/json').send(input)

    expect (res.status).toBe(200)
    expect(res.body.factory).toEqual("25.00");
    expect(res.body.machineScores.weldingRobot).toEqual("25.00");

  }); 

  it('calculates machine health correctly for multiple machines as API', async () => {
    const input = '{ "machines": {"weldingRobot": {"vibrationLevel": "3.00", "electrodeWear": "0.5"}, "paintingStation": {"pressure": "55"}}}'
    const res =  await request(baseUrl).post('/machine-health').set('Content-type', 'application/json').send(input)

    expect (res.status).toBe(200)
    expect(res.body.factory).toEqual("74.31");
    expect(res.body.machineScores.weldingRobot).toEqual("73.61");
    expect(res.body.machineScores.paintingStation).toEqual("75.00");
  });   

  it('calculates machine health correctly for multiple machines but one outside range as API', async () => {
    const input = '{ "machines": {"weldingRobot": {"vibrationLevel": "3.00", "electrodeWear": "0.5"}, "paintingStation": {"pressure": "-1"}}}'
    const res =  await request(baseUrl).post('/machine-health').set('Content-type', 'application/json').send(input)

    expect (res.status).toBe(200)
    expect(res.body.factory).toEqual("36.81");
    expect(res.body.machineScores.weldingRobot).toEqual("73.61");
    expect(res.body.machineScores.paintingStation).toEqual("0.00");
  });
  
  it('calculates machine health correctly with no machines as API', async () => {
    const input = '{ "machines": {}}'
    const res =  await request(baseUrl).post('/machine-health').set('Content-type', 'application/json').send(input)

    expect (res.status).toBe(200)
    expect(res.body.factory).toEqual("0.00");
  });  

})