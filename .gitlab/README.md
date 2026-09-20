# CI/CD direction

The included GitLab pipeline validates the Next.js build and produces a Docker image artifact.

A future deployment stage can add:

GitLab CI → ECR → EKS → Argo CD → production

Keep deployment credentials out of the repository and configure them through protected CI/CD variables or workload identity.
