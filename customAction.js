/**
 * beforeAdd makes most sense when `add` option is active
 * Assuming we want to keep everything on the gh-pages branch
 * but remove just `some-outdated-file.txt`
 */
ghpages.publish(
  "dist",
  {
    add: true,
    async beforeAdd(git) {
      return git.add("./CNAME");
    },
  },
  callback
);
