# SaferJourno


SaferJourno is a project by [Internews](https://internews.org/)! 
The [SaferJourno website](https://saferjourno.org) is built using the [Hugo](https://gohugo.io) Static Site Generator, running on GitHub Pages.

The contents of the SaferJourno guide are released under a [CC-BY-SA 4.0 license](https://creativecommons.org/licenses/by-sa/4.0/).

[Full credits](https://saferjourno.org/license/license-and-credits/)


## Some notes for future maintainers

If you see a _last updated_ date for a page, then it's been dynamically generated, based on the most recent git commit to the markdown file from which this page was built. To make this functionality work, we also needed to slightly update the hugo.yml file in order to:

* Add an `--enableGitInfo` flag to Hugo's runtime parameters. This forces Hugo to also use GitInfo (that's how it gets the last modified date)
* Add a `fetch-depth: 0` to the checkout actions. This allows GitInfo to look into the file histories to properly fetch the last updated dates

We have created two main layouts: `single.html` and `single-intro-outro.html`. They are both very similar, though the latter does not contain a last modified date, or a direct link to edit the page on GitHub. It's therefore just designed for pages such as descriptions or credits, which are not expected to be regularly updated.

SaferJourno is ready to be localized into new languages. Currently, we have set up functionality for English and Spanish.
Since some external pages have already linked to SaferJourno's English-language content, we have set `defaultContentLanguageInSubdir` to `false` in our `config.toml` file. This means that all English language chapters will follow a `saferjourno.org/chapter-$` structure, while Spanish language content will follow a `saferjourno.org/es/chapter-$` structure. We have furthermore created aliases for every English language chapter, and added them to each chapter's front matter. That way, `saferjourno.org/en/chapter-$` will redirect to `saferjourno.org/chapter-$`. When creating or renaming a page, the alias will need to be modified accordingly.

At this moment, the language switcher is very basic—it simply directs the user to either `saferjourno.org` (the default English version) or `saferjourno.org/es` (the beta Spanish version). If we would like to roll out more advanced linking functionality (for example, making sure that chapter 1 in English links to chapter 1 in Spanish), it would be best to create translation keys for all: https://gohugo.io/content-management/multilingual/