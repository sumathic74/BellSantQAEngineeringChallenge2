# BellSant QA Engineer Coding Challenge

Welcome to the BellSant QA Engineer coding challenge! This challenge is designed to assess your skills in creating testing tools, setting up testing infrastructure, and writing meaningful tests for our React Native application and API backend. Our goal is to evaluate your ability to ensure the application functions correctly and enable regression testing for each release.

## Challenge Overview

### The Application

The application you'll be working on is a tool for evaluating the health of various machines in an automobile manufacturing plant. This plant features a range of machines, each with specific data points that you will use to assess the condition of the production process.

#### Machines and Their Variables

1. **Welding Robots**

   - Welding Robot Error Rate
   - Welding Arm Vibration Level
   - Electrode Wear
   - Gas Shielding Pressure
   - Welding Wire Feed Rate
   - Arc Stability
   - Weld Seam Width
   - Cooling System Efficiency

2. **Painting Stations**

   - Paint Flow Rate
   - Paint Pressure
   - Paint Color Consistency
   - Paint Nozzle Condition

3. **Assembly Lines**

   - Part Alignment Accuracy
   - Assembly Line Speed
   - Component Fitting Tolerance
   - Conveyor Belt Speed

4. **Quality Control Stations**
   - Inspection Camera Calibration
   - Inspection Light Intensity
   - Inspection Software Version
   - Inspection Criteria Settings

### Time Limit

You are expected to spend approximately 3 hours on this challenge. While we understand that testing can be a never-ending task, we're interested in seeing how far you can get and how you prioritize tasks to maximize impact within the given time frame.

## Repository Structure

The repository is structured as follows:

```
├── native-app/
│   ├── source code files...
│   ├── README.md               # The README file for running the React Native Mobile app
│   └── ...
│
├── backend/
│   ├── source code files...
│   ├── README.md               # The README file for running the API Backend
│   └── ...
│
├── MachineHealth.apk           # The compiled android app for running on a device or emulator (if helpful)
├── README.md                   # This README file
```

## Getting Started

1. Fork this repository to your GitHub account.
2. Clone your forked repository to your local machine.

## Running the App Locally

To run the Machine Health Evaluation app locally, you'll need to set up and run both the React Native app and the API backend separately. Each of the respective folders are in this director and each have their own README files to help you get started.

To use the Machine Health Evaluation app locally, you'll need to keep both the API and the React Native app running simultaneously. It's recommended to open separate terminal/command windows for each and run them in parallel.

- In one terminal window, navigate to the `backend` folder and run the API backend.
- In another terminal window, navigate to the `native-app` folder and run the React Native app.

Keep in mind that the React Native app relies on the API to fetch and calculate machine health data. Ensure that the API is accessible to the app for it to function correctly.

For specific details on running the API and React Native app, refer to their respective README files in their respective folders.

## Your Tasks

Your primary tasks for this challenge include:

1. **Setting Up Testing Infrastructure**: Create a testing framework and environment for both the React Native application and the API backend.

2. **Writing Unit Tests**: Write unit tests that cover critical functionality, including the correctness of calculations within the React Native app and the API backend. Ensure that these tests are easy to run.

3. **Writing Integration Tests**: Include working integration tests for the React Native application and the API backend to ensure that various components interact correctly, and calculations produce accurate results. Additionally, if you find it helpful, there is an APK of the React Native app compiled and available in this root directiory for your use.

4. **Documentation**: Provide clear and concise documentation on how to run the tests and any dependencies required.

5. **Regression Testing**: Implement a basic regression testing strategy that can be run with each new release.

## Submission Guidelines

- Provide a link to your Git repository containing the updated project.
- Include instructions on how to run any new tests as well as an overview of your approach.

## Evaluation Criteria

We will evaluate your coding challenge based on the following criteria:

- **Test Variety**: The diversity of tests you've implemented, including unit tests to assess individual components and functions, as well as end-to-end click-through integration tests to ensure seamless interaction within the React Native application and the API backend.

- **Code Quality**: The cleanliness and readability of your testing code.

- **Documentation**: The clarity of your instructions on running tests and any dependencies.

- **Regression Testing Strategy**: The effectiveness of your strategy to enable regression testing for future releases.

## Contact Us

If you have any questions or need clarification on any aspect of this challenge, please feel free to reach out to us.

We look forward to seeing your contributions and assessing your QA engineering skills!

Happy coding!
