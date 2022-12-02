await within(async () => {
    // await $`git add .`;
    // const commitMessage = await question('Commit Message:');
    // await $`git commit -m ${commitMessage}`;
    // await $`git pull --rebase origin master`;
    const currentBranch = await $`git branch --show-current`;
    await $`git push origin ${currentBranch} -f`;
    echo(`✅ Pushed Successful !!!`);
    echo(currentBranch);
});

