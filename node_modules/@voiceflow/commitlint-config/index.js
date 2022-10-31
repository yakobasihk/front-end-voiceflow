module.exports = {
  rules: {
    'type-enum': [2, 'always', ['build', 'ci', 'chore', 'docs', 'feat', 'fix', 'merge', 'perf', 'refactor', 'revert', 'style', 'test', 'wip']],
  },
  extends: ['@commitlint/config-conventional'],
};
