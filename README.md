# d3aio_assignment
# cypress-cucumber-example
Initial exaassignment of using Cypress with Cucumber.


# Run example tests

```
npm install
npm test
```  


###### Simple Example Run
  Run ```npm test``` in this repo. 
  
  ```                                                                                                   
/d3aio_assignment$ npm test

> d3io-cypress-assignment@1.0.0 test /home/prashant/work/nodejs/d3aio_assignment
> cypress run --spec "**/*.feature"


====================================================================================================

  (Run Starting)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Cypress:    7.6.0                                                                              │
  │ Browser:    Electron 89 (headless)                                                             │
  │ Specs:      1 found (feature/Assignment.feature)                                               │
  │ Searched:   **/*.feature                                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


────────────────────────────────────────────────────────────────────────────────────────────────────
                                                                                                    
  Running:  feature/Assignment.feature                                                      (1 of 1)


  The D3a Assignment
    ✓ Verification of user is able to login to d3a.io (11816ms)
    ✓ Verification of user is able to create project after login (11224ms)
    ✓ Verification of user is able to simulation to project (16397ms)


  3 passing (40s)


  (Results)

  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ Tests:        3                                                                                │
  │ Passing:      3                                                                                │
  │ Failing:      0                                                                                │
  │ Pending:      0                                                                                │
  │ Skipped:      0                                                                                │
  │ Screenshots:  0                                                                                │
  │ Video:        true                                                                             │
  │ Duration:     39 seconds                                                                       │
  │ Spec Ran:     feature/Assignment.feature                                                       │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘


  (Video)

  -  Started processing:  Compressing to 32 CRF                                                     
    Compression progress:  52%
    Compression progress:  100%
  -  Finished processing: /home/prashant/work/nodejs/d3aio_assignment/cypress/videos/   (29 seconds)
                          feature/Assignment.feature.mp4                                            


====================================================================================================

  (Run Finished)


       Spec                                              Tests  Passing  Failing  Pending  Skipped  
  ┌────────────────────────────────────────────────────────────────────────────────────────────────┐
  │ ✔  feature/Assignment.feature               00:39        3        3        -        -        - │
  └────────────────────────────────────────────────────────────────────────────────────────────────┘
    ✔  All specs passed!                        00:39        3        3        -        -        -  


```
