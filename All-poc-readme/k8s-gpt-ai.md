# k8sgpt Installation (kubectl, eksctl, helm, k8sgpt)

This README documents a straightforward set of commands to install `kubectl`, `eksctl`, `helm`, and the `k8sgpt` CLI, then deploy the `k8sgpt-operator` Helm chart into the `k8sgpt` namespace.

> Target: Linux (x86_64). The example uses `yum` (Amazon Linux / RHEL / CentOS). For Debian/Ubuntu adjust package manager commands accordingly.

## Prerequisites

- A Linux x86_64 host with sudo privileges and outbound internet access
- `curl`, `tar`, and `gzip`
- (Optional for EKS) `aws` CLI configured with credentials and region

## Installation Steps

1. Update base packages (Amazon Linux/CentOS/RHEL)

```sh
sudo yum update -y
```

2. Install `kubectl` (example pinned to an EKS-compatible binary)

```sh
curl -o /tmp/kubectl https://amazon-eks.s3.us-west-2.amazonaws.com/1.19.6/2021-01-05/bin/linux/amd64/kubectl
chmod +x /tmp/kubectl
sudo mv /tmp/kubectl /usr/local/bin/kubectl

kubectl version --client || true
```

3. Install `eksctl` (latest release)

```sh
curl --silent --location "https://github.com/weaveworks/eksctl/releases/latest/download/eksctl_$(uname -s)_amd64.tar.gz" \
  | tar xz -C /tmp

sudo mv /tmp/eksctl /usr/local/bin/eksctl

eksctl version || true
```

4. Install Helm 3 (official script)

```sh
curl -fsSL https://raw.githubusercontent.com/helm/helm/main/scripts/get-helm-3 | bash
```

5. Download and install the `k8sgpt` CLI

```sh
cd /tmp
curl -LO https://github.com/k8sgpt-ai/k8sgpt/releases/latest/download/k8sgpt_Linux_x86_64.tar.gz
tar -xzf k8sgpt_Linux_x86_64.tar.gz
sudo mv k8sgpt /usr/local/bin/

k8sgpt version
```

6. Add the `k8sgpt` Helm repo and deploy the operator

```sh
helm repo add k8sgpt https://charts.k8sgpt.ai
helm repo update

helm install k8sgpt-operator k8sgpt/k8sgpt-operator \
  --namespace k8sgpt \
  --create-namespace
```

7. Verify the deployment

```sh
kubectl get pods -n k8sgpt
helm list -n k8sgpt
k8sgpt version
```

## Quick verification commands

```sh
# Check cluster access
kubectl cluster-info || true

# Check k8sgpt resources
kubectl get all -n k8sgpt
```

## Where this file lives

This installation guide is saved as `README.md` at the repository root.

---
https://platform.openai.com/  

k8sgpt auth add <yourkey> 

k8sgpt auth list

k8sgpt analyse --explain

k8sgpt auth remove --backends=openai
