const createWriteStream = require('fs').createWriteStream
const conventionalChangelog = require('conventional-changelog')

const stream = createWriteStream('./CHANGELOG.md')

const config = {
  releaseCount: 0,
  preset: 'angular'
}
conventionalChangelog(config, {
  owner: 'gyh9457',
  commit: 'commit',
  host: 'https://github.com/',
  repository: 'specification'
})
  .pipe(stream)
