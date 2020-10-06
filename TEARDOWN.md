## Tear down

1. `kubectl delete ns example` will delete everything inside the namespace, pods, services, deployments, etc.
2. If you've set the namespace in the config, reset it with `kubectl config set-context --current --namespace=""`.
3. Disable kubernetes again inside the Docker settings.

[:house: Back to the README.](./README.md)

[:arrow_backward: Exercise 3.](./EXERCISE-3.md)
