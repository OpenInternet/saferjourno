# SaferJourno

The [SaferJourno website](https://saferjourno.org) is built using the [Hugo](https://gohugo.io) Static Site Generator, including the use of [NetlifyCMS](https://decapcms.org/) to manage the content and localization.
To edit the website locally, we have to install Hugo Extended version and NPM/NodeJS (latest version preferrable).

## Overview

Hugo is a static HTML and CSS website generator written in Go. It is optimized for speed, ease of use, and configurability. Hugo takes a directory with content and templates and renders them into a full HTML website.

Hugo relies on Markdown files with front matter for metadata, and you can run Hugo from any directory. This works well for shared hosts and other systems where you don’t have a privileged account.

Hugo renders a typical website of moderate size in a fraction of a second. A good rule of thumb is that each piece of content renders in around 1 millisecond.

## How to install

If you want to use Hugo as your site generator, simply install the Hugo binaries. Use the [installation instructions in the Hugo documentation](https://gohugo.io/getting-started/installing/).

You can install NodeJS/NPM via their [official website](https://nodejs.org/en/download/), or via your local package manager if you're using a *nix operating system.

## Local testing

After installing NodeJS, we have to run the following command inside the root path of the website.

`npm install`

This will install the required modules we use to tree-shake the CSS files and make them smaller, greatly reducing loading size and time.

Afterwards, we have to run Hugo with the following command.

`hugo server --environment production`

The `--environment` argument is necessary for us to be able to render the content in the same way that the public version would come out to be.

With this we're ready to start editing the files.

## Editing via CMS

Our CMS of choice is NetlifyCMS, and it resides inside the `static/admin` folder. This Content Management System uses a `config.yml` file which tells it where to find the content, and how to edit it accordingly. To access the CMS, we have to open the following URL locally:

`http://localhost:1313/admin`

The port may be different depending on your system, but 1313 is usually the default one that Hugo uses.

The CMS login page now shows up, and we can authenticate using Netlify Identity or via GitHub. After successful authentication, we are ready to edit the content, where the sidebar contains the different "pages" that we can edit. When clicking on one of the items, the right side displays the content within, and they're individual files that contain the content that we can edit. 

Depending on the item selected on the left sidebar, we also have the option to create new files within, and add our new information, or to edit existing ones. Additionally, some content has been locked to a non-deletable state as it is necessary for the website to function.

When editing an item, we have two panes, left and right, and we can add the English/other language versions in the same view. When done, we can publish these changes directly or commit them to a draft publication. It is recommended to go through the whole editorial workflow and never publish things immediately. This will ensure no unnecessary commits are made that could pollute the repo in the long run.

## Editing via VSCodium/another IDE

Some files are not available to edit inside the CMS, so they have to be changed manually. These include, at the moment of writing, the Hugo `config.toml` file, the translation keys inside the `i18n` folder and the layouts/scss files. As these don't fall in the same category as content, they were better left outside to be changed per-needs. 

## Docs

For further changes and customization, refer to the [Hugo docs](https://gohugo.io/documentation/) and [Decap docs](https://decapcms.org/docs/intro/).