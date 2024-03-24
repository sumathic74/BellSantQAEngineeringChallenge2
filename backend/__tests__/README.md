# BellSant Machine Health Unit tests

## Unit testing

In order to test the calculations, as first step, I went thru the calculation code and got some understanding.

As part of unit testing the application, I have tested the units like machine part health and machine health. The tests performed are as below

1. Calculate Machine part health
   a) For normal part
   b) for abnormal part
   c) for optimal part
   d) outside range on lower side
   e) outside range on higher side

2. Calculate Machine health
   a) all parts normal
   b) all parts abnormal
   c) all parts optimal
   d) Multiple parts of a machine (some normal, some optimal, some abnormal)

I obsered that in case of overlapped ranges (ex: normal [0.2 - 1.0], optimal [0 - 0.2]), it is first of normal, abnormal, optimal that is picked. There should be some validation to ensure the data is not overlapped.

## API testing

### Prerequisites

Before the API tests, make sure following is installed
- super test (supertest)
- super test types (@types/supertest)

Make sure the API is running at http://localhost:3001/machine-health

The following tests are created to ensure API is working fine

a) Calculate Machine health for a single Machine generally
b) Factory health for a machine with multiple normal
c) Factory health for a machine with multiple optimal
d) Factory health for a machine with multiple abnormal
e) Factory health for 2 machines with multiple normal parts
f) Factory health for 2 machines (1 machine with normal parts, 1 with outside range)