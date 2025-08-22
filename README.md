# copilot-actions-sandbox

This repository is a sandbox for testing automation and AI-assisted coding on GitHub.

---

# GitHub Actions Quick Guide

This section provides a concise overview of working with GitHub Actions, including basic concepts, configuration, and self-hosted runners setup. All content is in English and tailored for quick reference.

---

## Basic Concepts
- **Workflow**: Automated process defined in `.github/workflows/*.yml`.
- **Job**: A set of steps executed on the same runner.
- **Step**: An individual task (e.g., run a command, checkout code).
- **Runner**: A server that executes jobs (GitHub-hosted or self-hosted).

---

## Example Workflow
```yaml
name: CI
on: [push, pull_request]
jobs:
	build-and-test:
		runs-on: ubuntu-latest
		steps:
			- uses: actions/checkout@v4
			- name: Set up Node.js
				uses: actions/setup-node@v4
				with:
					node-version: '20'
					cache: 'npm'
			- name: Install dependencies
				run: npm ci
			- name: Lint
				run: npm run lint
			- name: Test
				run: npm test
```

---

## Self-hosted Runner Setup
1. Go to your repository or organization settings → Actions → Runners.
2. Click "New self-hosted runner" and follow the instructions.
3. Example setup commands:
	 ```bash
	 # Download runner
	 curl -o actions-runner-linux-x64-2.316.0.tar.gz -L https://github.com/actions/runner/releases/download/v2.316.0/actions-runner-linux-x64-2.316.0.tar.gz
	 tar xzf ./actions-runner-linux-x64-2.316.0.tar.gz
	 # Configure
	 ./config.sh --url https://github.com/<owner>/<repo> --token <TOKEN>
	 # Start
	 ./run.sh
	 ```
4. Add to workflow:
	 ```yaml
	 runs-on: self-hosted
	 ```

---

## Useful Links
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Self-hosted Runners](https://docs.github.com/en/actions/hosting-your-own-runners/about-self-hosted-runners)
- [Actions Marketplace](https://github.com/marketplace?type=actions)

---

*This guide is designed for quick onboarding and reference. For advanced topics, see the official documentation.*
