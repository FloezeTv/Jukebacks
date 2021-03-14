# Jukebacks

<p align="center">
    <img src="icon.png" alt="" width="512">
</p>

A small jukebox that runs in the background and can be controlled from a webpage.

## Installation

Prebuilt binaries can be found in the [Releases](https://github.com/FloezeTv/Jukebacks/releases)-Section.

### Usage

The app will start with a small dashboard.
The website for control from other pcs can be found at [`<your-ip>:<port>`](http://localhost:5000).
The default port is 5000, but can be changed with the environment variable `PORT`.

### [Changelog](CHANGELOG.md)

The changelog can be found [here](CHANGELOG.md).

## Development

For development, there are some scripts availiable:

- `start:frontend`: Starts the frontend in development mode (updates when files are changed). Open [localhost:3000](http://localhost:3000) to see the frontend.
- `start:backend`: Starts the backend in development mode (updates when files are changed). Open [localhost:5000](http://localhost:5000) to see the backend.
- `start:electron`: Starts electron in development mode (updates when files are changed). Opens a new window.
- `start`: Starts `start:frontend` and `start:backend` at the same time.
- `build:icon`: Builds the icons for the app.
- `build:frontend`: Builds the frontend to static files. These will be used in `start:backend`, `start:electron` and `build:electron`.
- `build:electron`: Builds the icons (`build:icon`) and then the electron app for your current system.
- `build`: First builds the frontend (`build:frontend`) and then the electron app (`build: electron`).

### git-flow

This repository uses git-flow.
More information can be found [here](https://nvie.com/posts/a-successful-git-branching-model/).  
Feature/hotfix-branches names should start with the issue number and a short description (e.g. `42-add-answer`).