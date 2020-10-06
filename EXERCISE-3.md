## Time to scale it

### Manual scaling

1. Run a load test, `ab -n 25 -c 5 localhost:8080/` and write down the tests' time to finish.
2. Reference the [kubectl cheat sheet](https://kubernetes.io/docs/reference/kubectl/cheatsheet/) and scale up so we have 5 running pods.
3. Run the load test again and check if there is a difference in the tests' time to finish.
4. Finish up by scaling down to 1 pod again.

### Autoscaling

With only 1 pod running, and our endpoint being very CPU intensive, it's time to create a `Horizontal Pod Autoscaler` that does the scaling for us.

Ahhh, sweet efficient laziness.

1. Let's apply the metrics server, `kubectl apply -f components.yaml`.
2. With only one pod running, lets deploy an HPA, `kubectl autoscale deployment hello-world --cpu-percent=5 --min=1 --max=10 -n example`.
3. Verify that the hpa is running with `kubectl get hpa -n example`.
4. If you see **Targets** showing `unknown></5%>`, then please run `kubectl set resources deployment hello-world --limits=cpu=300m,memory=64Mi -n example`. It should now show a percentage and not `unknown`. If not, please scale up to 5 pods manually and then down again when you see the percentage.
5. Run `kubectl get all -n example`, or `kubectl get pods, hpa -n example` to view the amount of running pods and hpa targets. You can also see the exact CPU and memory usage of the pods with `kubectl top pod -n example`
6. In a new terminal window, let's run the load test again to verify that autoscaling is working. `ab -n 25 -c 5 localhost:8080/`.
7. In the first window, let's see the hpa in action with `kubectl get hpa -n example` or `kubectl get pods, hpa -n example`.

[:house: Back to the README.](./README.md)

[:arrow_backward: Exercise 2.](./EXERCISE-2.md)

[:arrow_forward: Tear down.](./TEARDOWN.md)
