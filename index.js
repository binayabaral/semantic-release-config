module.exports = {
  plugins: [
    [
      "@semantic-release/commit-analyzer",
      {
        releaseRules: [
          {
            type: "refactor",
            release: "patch",
          },
          {
            type: "docs",
            release: "patch",
          },
          {
            type: "test",
            release: "patch",
          },
          {
            type: "style",
            release: "patch",
          },
          {
            type: "perf",
            release: "patch",
          },
          {
            type: "ci",
            release: "patch",
          },
          {
            type: "build",
            release: "patch",
          },
          {
            type: "chore",
            release: "patch",
          },
        ],
      },
    ],
    [
      "@semantic-release/release-notes-generator",
      {
        preset: "conventionalcommits",
        presetConfig: {
          types: [
            {
              type: "feat",
              section: ":sparkles: Features",
              hidden: false,
            },
            {
              type: "fix",
              section: ":bug: Fixes",
              hidden: false,
            },
            {
              type: "docs",
              section: ":memo: Documentation Changes",
              hidden: false,
            },
            {
              type: "style",
              section: ":barber: Styles changes",
              hidden: false,
            },
            {
              type: "refactor",
              section: ":zap: Refactors",
              hidden: false,
            },
            {
              type: "perf",
              section: ":fast_forward: Performance Improvements",
              hidden: false,
            },
            {
              type: "test",
              section: ":white_check_mark: Tests",
              hidden: false,
            },
            {
              type: "ci",
              section: ":repeat: CI",
              hidden: false,
            },
            {
              type: "chore",
              section: ":rocket: Chores",
              hidden: false,
            },
            {
              type: "build",
              section: ":building_construction: Builds",
              hidden: false,
            },
            {
              type: "revert",
              section: ":leftwards_arrow_with_hook: Reverts",
              hidden: false,
            },
          ],
        },
      },
    ],
    [
      "@semantic-release/changelog",
      {
        changelogFile: "CHANGELOG.md",
      },
    ],
    [
      "@semantic-release/git",
      {
        assets: ["CHANGELOG.md"],
        message: "chore(release): ${nextRelease.version} [skip ci] Update changelog after release",
      },
    ],
    [
      "@semantic-release/github",
      {
        successComment: false,
        releasedLabels: false,
      },
    ],
  ],
};
