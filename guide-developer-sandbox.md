# NVIDIA LaunchPad Developer Sandbox

NVIDIA LaunchPad is a free program that provides users short-term access to a large catalog of hands-on labs. This particular deployment includes the LaunchPad Developer Sandbox, which consists of the following supplemental platform, components, and configurations:

- [NVIDIA Cloud Native Stack with Docker](https://github.com/NVIDIA/cloud-native-stack/tree/master/playbooks)
- [Code Server](https://github.com/coder/code-server/) with a prescriptive workspace

Within the Developer Sandbox you have full `sudo` privileges on the GPU node.

---

## Resources

- [Code Server IDE](https://68699ee7-67c1-e26b-e7a8-8c7f7d3919a8.nvidialaunchpad.com/code/)
    - This web-based IDE is the preferred method of interacting with your NVIDIA LaunchPad environment, with drag-and-drop uploads and easy download capabilities supported out-of-box. Note you may encounter filesize upload limits of ~100MB. It's preferred to import large datasets or object via `pull` (e.g. initiating a download from a terminal in Code Server from an externally hosted object store).
- [Desktop Environment](https://68699ee7-67c1-e26b-e7a8-8c7f7d3919a8.nvidialaunchpad.com/novnc2/vnc.html?resize=scale&path=novnc2/wesockify)
    - If you require a full graphical user interface you can access the GPU node directly via NoVNC and your web browser.
- [WebSSH](https://68699ee7-67c1-e26b-e7a8-8c7f7d3919a8.nvidialaunchpad.com/ssh/host/)
    - WebSSH is provided as an alternative to exclusive use of the Code Server IDE.


## Getting Started

[NVIDIA Cloud Native Stack with Docker](https://github.com/NVIDIA/cloud-native-stack/tree/master/playbooks) allows the flexibility of deploying local docker workloads or Kubernetes workloads directly on a GPU node with appropriate drivers pre-installed for your convenience. To determine what hardware and specs are included in your sandbox you can execute the following commands:

### Docker
```bash
docker run --rm --gpus all nvidia/cuda:11.6.2-base-ubuntu20.04 nvidia-smi
```

### Kubernetes
```bash
kubectl exec daemonset/nvidia-device-plugin-daemonset -n nvidia-gpu-operator -- nvidia-smi
```

Sample output:
```
Defaulted container "nvidia-device-plugin" out of: nvidia-device-plugin, toolkit-validation (init)
Fri Feb 17 20:40:07 2023       
+-----------------------------------------------------------------------------+
| NVIDIA-SMI 525.85.12    Driver Version: 525.85.12    CUDA Version: 12.0     |
|-------------------------------+----------------------+----------------------+
| GPU  Name        Persistence-M| Bus-Id        Disp.A | Volatile Uncorr. ECC |
| Fan  Temp  Perf  Pwr:Usage/Cap|         Memory-Usage | GPU-Util  Compute M. |
|                               |                      |               MIG M. |
|===============================+======================+======================|
|   0  NVIDIA A100-SXM...  On   | 00000000:00:04.0 Off |                    0 |
| N/A   28C    P0    49W / 400W |    127MiB / 40960MiB |      0%      Default |
|                               |                      |             Disabled |
+-------------------------------+----------------------+----------------------+
                                                                               
+-----------------------------------------------------------------------------+
| Processes:                                                                  |
|  GPU   GI   CI        PID   Type   Process name                  GPU Memory |
|        ID   ID                                                   Usage      |
|=============================================================================|
+-----------------------------------------------------------------------------+
```