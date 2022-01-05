
# Contributing to LearnR Web App

## Table of Contents

- [I Have a Question](#i-have-a-question)
- [I Want To Contribute](#i-want-to-contribute)
  - [First Time Contributing?](#first-time-contributing?)
- [Styleguides](#styleguides)
  - [Commit Messages](#commit-messages)

## I Have a Question

> If you want to ask a question, we assume that you have read the available instructions, if you still face any confusion, Kindly communicate it with us on the Whatsapp group.

## I Want To Contribute

In order to contribute to this project, the entire process follows the following structure

- You identify an [issue](https://github.com/cindyeme/learnR/issues) you want to work on, or is assigned to you.
- You make changes that solves this issue, you then write tests (Where required) and ensure that it passes.
- You open a pull request, which will be reviewed and merged if it checks the right boxes.

Congratulations, you have just contributed,🎉🎉🎉 now pick another [issue](https://github.com/cindyeme/learnR/issues) and repeat the same process.


#### First Time Contributing?

Everyone was a beginner at a point, and it goes without saying that, to become a master, you need to be a learner. Therefore, if this is your first time contributing, relax, read the following instructions and I promise you won't mess things up.

> And even if you do, the PR manager will catch it. But please don't.

So here is a run down of how you would go about contributing:

- #### Fork your own copy of the Repository

  The first thing you will want to do is fork [this](https://github.com/cindyeme/learnR) repository. What this mean, is that you get your own copy of this repository. You can then safely make changes to your own copy, and then later, you can submit your changes, and tell the PR leads to combine (merge) the changes you made to the central/main repository. Here is a short [Video](https://youtu.be/ATz2mZG78MU) showing how to do that.

- #### Clone the Repository on your Local Machine

  The next thing you want to do is clone (make a copy) the learnr on your profile, to your local machine (Laptop, PC, MacBook). To do that,

  - Copy the link of your own LearnR repository (the one you forked).
  - Open the folder you want to work on your machine.
  - Open your favourite editor.
  - Open the terminal.
  - run `git clone [Link to your copy of the learnR repository]`.
    > The link should look like this : `https://github.com/<your username>/learnR.git`

  Again, here is a link to a [short video](https://youtu.be/RXDja3ZkqZY) showing how you can do this.

- #### Configure the upstream

  Now that you have the local copy of Zuri main. There are other  developers contributing to the project, so you have to update your local copy very frequently. Therefore, you need to connect your local copy to the original repository. To do that :

  - copy this link here `https://github.com/cindyeme/learnR.git`
  - go to your local machine terminal, in the project folder
  - run `git remote add upstream https://github.com/cindyeme/learnR.git`

  Now, your local copy can fetch (update) from the original source, and you won't miss out on any update. Here is a [short video](https://youtu.be/EAMzEcg0EmY) showing the instruction.

- #### Commiting your changes

  Now, you can start making changes that relates to your issues and then commiting them. To do this, follow these instructions:

  - First, create a branch with the feat prefixing the name of the feature you are to implement.
  - For example, do this by running `git checkout -b feat/signup button component`
  - Make your changes.
  - add the changes using `git add .` or any one that serves your needs.
  - add concise commit messages, referencing your issue number with a close action.
    > e.g `git commit -m "adds signup button to the sign up page close #21"`
    >
    > What this mean is that, when your pull request is merged (More on that below). Issue #21 is automatically closed.
  - run `git push origin [name of the repo you created]`
    > For the example above, you run
    >
    > `git push origin feat/signup`
    >
    > Which pushes your changes to your online copy, after which you then open a pull request.
  - Here is a [Video](https://youtu.be/VY4-yw7dbY8) showing how to perform that.

- #### Opening Pull requests

  Now that you have updated your online copy. You will need a way to inform the PR Lead handling the original repository that your contribution is ready. To do that, you open a Pull request, which simply means that you want them to combine(merge) your changes with that of the original repository. Because, what is the essence of making changes without the changes being merged right?

  To open a pull request, immediately after the last step (commiting your changes with push):

  - Head over to your github account. And click on your own copy of the zc_main repository.
  - You will see the option to open a pull request.
  - Explain what your changes does, adding images and proof (test) if needed.
  - Click the open pull request button and wait.
  - Add comments where neccesary and wait for the PR Lead to check.
    Here is a [Video](https://youtu.be/3_LgvC0-Om4) showing how to go about it.

- #### Constantly update from upstream

  Now that you have your issues, you have forked the repository, you have cloned the repository and also set the upstream. To stay up to date and avoid conflicts. Before you edit anything, you need to update your local copy. Therefore, whenever you want to make any change, first run an update command like so:

  - In the directory of the project on your local machine
  - Open the terminal.
  - Run `git pull upstream main`
    > This will check for any changes that have been made to the original repository, it will then bring those changes to your local machine and merge (merge) the changes.

## Styleguides

We advocate for clean code and well structured codes. It is easier said than done, which is why there are linting configurations set up in the repository. Endeavour to keep the code you write clean and maintainable. Software is not only a science, but also an art.

### Commit Messages

Commit messages should include concise messages about what was done and what has changed. Failure to follow this would result in the pull request being rejected.

## Other Information

- Check if there are any linting errors by running `yarn lint` before commiting your code.
- Please make sure your commit messages and pr titles give enough info about the changes you've made.

- ### Pull Requests

  - Take note of all instructions above
  - Whatever task it is that you do must be responsive on all screens
  - Make sure your branch is up to date with the master branch and without conflicts before making your pull request, if not your PR may not be merged
  - Push your code as soon as you can [ASAP]
  - Link whatever issue it is that you worked on to your pull request
  - In the comment section of the pull request, document your work thoroughly(a helpful description)
  - In a situation where you work on functional parts add a show `what it does` video if you can
  - Do `git fetch` at least twice a day to be up to date with the repo
  - Always do a git fetch or pull of the main branch before you write code and before making your pull request
  - Your pull request must not change the work of others
  - Your work should be pixel perfect
