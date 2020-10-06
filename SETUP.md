## Setting up Kubernetes locally with Docker on macOS

1. [Install Docker](https://docs.docker.com/docker-for-mac/install/) (we're using version 19.03.x)
2. [Install kubectl](https://kubernetes.io/docs/tasks/tools/install-kubectl/#install-kubectl-on-macos) (`$ brew install kubectl`)
3. Enable Kubernetes on Docker (we're using version 1.18.x)
   ![Enable k8s on Docker](./enable_kubernetes_on_docker.png)
4. Set kubectl context to your local cluster
   1. `$ kubectl config get-contexts` to see all available contexts
   2. `$ kubectl config use-context docker-for-desktop`

5) Create a new namespace `kubectl create ns example`
   Optionally set this namespace as default for the kubectl context `kubectl config set-context --current --namespace=example`. Verify with `kubectl config view | grep namespace`

[:house: Back to the README](./README.md)

[:arrow_forward: Exercise 1](./EXERCISE-1.md)
