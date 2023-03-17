# Getting Started :id=test

**Welcome to the trial of NVIDIA AI Enterprise on NVIDIA LaunchPad.**

The NVIDIA AI Enterprise suite includes the applications, frameworks, and tools that AI researchers, data scientists, and developers use for creating their AI and Machine Learning applications.

NVIDIA AI Enterprise allows AI Practitioners to run Deep Learning workflows in virtual machines with the same performance as a local workstation. IT Administrators have all the tools to create VMs with required NVIDIA AI Enterprise components to perform AI Training and deploy inferencing; AI practitioners can quickly access Jupyter Notebook etc on these these VMs which leverage NVIDIA GPUs. This allows AI Practitioners to have instant access to valuable GPU resources within Enterprise data centers. The AI applications that are part of the enterprise stack are available as containers like TensorFlow, Pytorch, RAPIDS and Triton Inference Server as shown in the figure above. So, the AI practitioners can also easily deploy these workloads to production on various Kubernetes distributions like Openshift and Tanzu

In this lab, we show you how an AI practitioner can deploy a Training + Inference workload on Openshift using a helm chart (discussed in the next section). You will run through an end-to-end data science workflow on Openshift that uses TensorFlow to train an image classification model and then uses NVIDIA’s Triton Inference Server to deploy the model for inference to production. You will use a client application to issue inference requests to the Triton Inference server. Stanford Online Products dataset will be used to train the e-commerce image classification model; this dataset includes images available on your regular e-commerce websites.

## Subsection 1

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.

## Subsection 2

Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.