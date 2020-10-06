Autoscaling:
With only 1 pod running, and our endpoint being very CPU intensive, it's time to create a `Horizontal Pod Autoscaler` that does the scaling for us.

Ahhh, sweet efficient laziness.

1. Let's apply the metrics server, `kubectl apply -f components.yaml -n example`
2. With only one pod running, lets deploy an HPA, `kubectl autoscale deployment hello-world --cpu-percent=5 --min=1 --max=10 -n example`. Verify that it's running with `kubectl get hpa -n example`
3. If you see **Targets** showing `unknown></5%>`, then please run `kubectl set resources deployment hello-world --limits=cpu=300m,memory=64Mi -n example`. It should now show a percentage and not `unknown` // not sure why this is happening
4. Run `kubectl get all -n example`, or `kubectl get pods, hpa -n example` to view the amount of running pods and hpa targets.
5. In a new terminal window, let's run the load test again to verify that autoscaling is working. `ab -n 25 -c 5 localhost:8080/`
6. In the first window, let's see the hpa in action with the commands from step 3.

[Back to the README](./README.md)

[Exercise 3](./EXERCISE-3.md)
[Exercise 5](./EXERCISE-5.md)
