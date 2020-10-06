## Your first deployment

1. Deploy the node.js server `kubectl apply -f hapi-example-deployment.yaml -n example` // you can skip appending the namespace if you set it in the optional config set above.
2. You should now be able to see the running pod with `kubectl get pods -n example`
3. This service is now running internally inside the cluster, unexposed, which means we cannot access it.
   Optionally check this by `curl localhost:8080`
4. Let's expose the deployment with a Load Balancer `kubectl expose deployment hello-world --type=LoadBalancer --name=my-service -n example`
5. You can now get all services by running `kubectl get services -n example`
   Note the Type, External-IP and Port. We should have a Load Balancer service running on localhost with external port 8080.
6. We should now be able to `curl localhost:8080` and get a reply.

[:house: Back to the README](./README.md)

[:arrow_backward: Setup steps for Kubernetes with Docker on macOS](./SETUP.md)

[:arrow_forward: Exercise 2](./EXERCISE-2.md)
