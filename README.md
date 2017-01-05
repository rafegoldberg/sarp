UI <img align="right" width="150" src="README.png"/> 
===

#### _to code awesome things, make coding things awesome_

> a collection of tools, standards, and systems to simplify best-practice UI + UX development, and abstract the abstruse busywork of authoring and maintaining a frontend codebase.

[Install](#first-time-setup) | [Run](#getting-started) | [Develop](#design-and-develop) | [Debug](#design-and-develop) | [Deploy](#deploy) | [Roadmap](#roadmap)
--- | --- | --- | --- | --- | ---

## Install

If this is your first time running the `env`, there are a few tools you need before diving in. Otherwise, you can skip the next section and jump straight in to ["Getting Started"](#getting-started).

> **Note**: this readme assumes you've already [installed Git](//git-scm.com/download) on your machine

### First-Time Setup

The first thing you need to do is [get **Node JS**](//nodejs.org/en/download/). Hit the link to download the binary and run the installer. Node's command-line Javascript environment forms the backbone of the env. 

Node also includes the [**NPM** package manager](//docs.npmjs.com/getting-started/what-is-npm) which we use to manage the UI environment's core dependancies. Once Node is set up, you can use NPM to install the [**Grunt CLI**](http://gruntjs.com/getting-started#installing-the-cli). Which is much easier done than said:

```bash
sudo npm install -g grunt-cli
```

Next up is [**Bower**](//bower.io/#install-bower). Bower is a frontend-friendly package manager for dealing with static assets. To install it, just run:

```bash
sudo npm install -g bower
```

### Getting Started

First you need to clone this repo (duh...) Go ahead and `cd` in to the folder you want to instal your local environment in and run:

```
git clone https://github.com/rafegoldberg/ui.ds.git
```

This will download the repo in to a new `./ui.ds/` directory. Now let's `cd` in to the project itself and run:

```bash
sudo npm install -D #=core dependancies
sudo bower install  #=frontend packages
```

These two commands will install all of the dev dependancies which power the UI environment.

## Building the UI

### Baby's First Build

Once everything's cloned and installed, it's a cinch to actually start up the UI environment! From the top-level directory run:

```bash
sudo grunt ui.build
```

Blammo! That one line will grab all of the UI assets– including our `module/` files and SVG `icons/`, all the way down to the `core/` contexts –and build them together. The final stylesheets and scripts are bundled to the `dist/` directory, ready for use anywhere you see fit!

Next up: [using the watch task](#watch-and-code). (Or you might take a gander at the [list of all available tasks](#all-tasks).)

### Watch and code

Okay, so we've run a one-off build process. That is v. chill. But the real magic is in the watch task. Give it a spin by running:

```bash
sudo grunt
```

If everything worked, the watch task will monitor your local env directory. Jump on in to your editor of choice and try making some changes. With the env spooled up, hitting save should automatically trigger a rebuild!

## Design and Develop

> _**more to come**!_
> - libs + utils
> - core sass + scripts
> - structuring modules
> - best practices

## Debug 

> _more to come! **see also:** [`#10`](//github.com/rafegoldberg/ui.ds/issues/10)_

## Deploy

> _**more to come**!_ 
> - requirements
> - ftp task
> - stage v. prod process

## All Tasks

Per the above, you can start the env by running `grunt`. Alternately, you can target a specific part of the build process with any of these standalone tasks:

- **`ui.css`**

    > build `dist/dsUi.css` CSS from `core/` + `modules/`

- **`ui.js`**

    > build `dist/dsUi.js` from `core/` + `modules/`

- **`ui.icons`**

    > build css + assets from `icons/*.svg` to `dist/icons/`

- **`ui.build`**

    > build css+js from `{core,modules,icons}/*` to `dist/`

- **`env.deploy`**

    > commit and push all `ui/module/*` changes to master; FTP `dist/dsUi.*` and `dist/icons/*` to stage

If a task error out try rerunning it with `sudo`.