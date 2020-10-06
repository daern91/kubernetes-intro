#### Tear down

`kubectl delete ns example` will delete everything inside the namespace, pods, services, deployments, etc
If you've set the namespace in the config, reset it with `kubectl config set-context --current --namespace=""`

Disable kubernetes again inside the Docker settings.
