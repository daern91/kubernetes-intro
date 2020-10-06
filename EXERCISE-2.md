## Are we alive?

1. Get all pods, verify that they are running and note the amount of restarts.
2. Curl the `/crash` endpoint.
3. Get all pods again repeatedly to see how quickly the liveness probe realizes that we have a problem and restarts.

[:house: Back to the README.](./README.md)

[:arrow_backward: Exercise 1.](./EXERCISE-1.md)

[:arrow_forward: Exercise 3.](./EXERCISE-3.md)
