import {calculatePartHealth, calculateMachineHealth} from '../calculations';
import {
  MachineType,
  WeldingRobotPart,
  partInfo,
} from '../../native-app/data/types';

describe('calculatePartHealth', () => {
  it('calculates part health correctly for normal', () => {
    const machineName: MachineType = MachineType.WeldingRobot;
    const part: partInfo = {name: WeldingRobotPart.ErrorRate, value: 0.5};
    const expectedHealth = 72.22222222222223;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });

  it('calculates part health correctly for abnormal', () => {
    const machineName: MachineType = MachineType.WeldingRobot;
    const part: partInfo = {name: WeldingRobotPart.ErrorRate, value: 1.55};
    const expectedHealth = 25;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });

  it('calculates part health for optimal', () => {
    const machineName: MachineType = MachineType.WeldingRobot;
    const part: partInfo = {name: WeldingRobotPart.ErrorRate, value: 0.05};
    const expectedHealth = 100;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });

  it('calculates part health for outside range on lower side', () => {
    const machineName: MachineType = MachineType.WeldingRobot;
    const part: partInfo = {name: WeldingRobotPart.ErrorRate, value: -1};
    const expectedHealth = 0;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });

  it('calculates part health for outside range on higher side', () => {
    const machineName: MachineType = MachineType.WeldingRobot;
    const part: partInfo = {name: WeldingRobotPart.ErrorRate, value: 100};
    const expectedHealth = 0;

    const result = calculatePartHealth(machineName, part);
    expect(result).toBe(expectedHealth);
  });

});

describe('calculateMachineHealth', () => {
    it('calculates machine health correctly all optimal', () => {
      const machineName: MachineType = MachineType.WeldingRobot;
      const parts = [
        {name: WeldingRobotPart.ErrorRate, value: 0.01},
        {name: WeldingRobotPart.VibrationLevel, value: 0.01},
        {name: WeldingRobotPart.ElectrodeWear, value: 0.01}
      ];
      const expectedHealth = 100;
  
      const result = calculateMachineHealth(machineName, parts);
      expect(result).toBe(expectedHealth);
    });
  
    it('calculates machine health correctly all normal', () => {
      const machineName: MachineType = MachineType.WeldingRobot;
      const parts = [
        {name: WeldingRobotPart.ErrorRate, value: 0.55},
        {name: WeldingRobotPart.VibrationLevel, value: 3.00},
        {name: WeldingRobotPart.ElectrodeWear, value: 0.55}
      ];
      const expectedHealth = 75;
  
      const result = calculateMachineHealth(machineName, parts);
      expect(result).toBe(expectedHealth);
    });

    it('calculates machine health correctly all abnormal', () => {
        const machineName: MachineType = MachineType.WeldingRobot;
        const parts = [
          {name: WeldingRobotPart.ErrorRate, value: 1.55},
          {name: WeldingRobotPart.VibrationLevel, value: 7.55},
          {name: WeldingRobotPart.ElectrodeWear, value: 1.55}
        ];
        const expectedHealth = 25;
    
        // Get a result
        const result = calculateMachineHealth(machineName, parts);
        expect(result).toBe(expectedHealth);
    });

    it('calculates machine health correctly', () => {
        const machineName: MachineType = MachineType.WeldingRobot;
        const parts = [
          {name: WeldingRobotPart.ErrorRate, value: 0.5},
          {name: WeldingRobotPart.VibrationLevel, value: 4.0},
          {name: WeldingRobotPart.ElectrodeWear, value: 0.8},
          {name: WeldingRobotPart.ShieldingPressure, value: 12.0},
          {name: WeldingRobotPart.WireFeedRate, value: 7.5},
          {name: WeldingRobotPart.ArcStability, value: 92.0},
          {name: WeldingRobotPart.SeamWidth, value: 1.5},
          {name: WeldingRobotPart.CoolingEfficiency, value: 85.0},
        ];
        const expectedHealth = 76.70138888888889;
    
        const result = calculateMachineHealth(machineName, parts);
        expect(result).toBe(expectedHealth);
      });
});