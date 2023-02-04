# @binayabaral/semantic-release-config

[**semantic-release**](https://github.com/binayabaral/semantic-release-config) shareable config to create a new release in github with proper release notes, generate changelogs and commit it to the repository.

![image](https://user-images.githubusercontent.com/25500451/216754425-0af67066-09f6-4445-87ad-89146a49304e.png)

## Plugins

This shareable configuration use the following plugins:

- [`@semantic-release/commit-analyzer`](https://github.com/semantic-release/commit-analyzer)
- [`@semantic-release/release-notes-generator`](https://github.com/semantic-release/release-notes-generator)
- [`@semantic-release/changelog`](https://github.com/semantic-release/changelog)
- [`@semantic-release/git`](https://github.com/semantic-release/git)
- [`@semantic-release/github`](https://github.com/semantic-release/github)

## Install

```bash
$ yarn add -D semantic-release @binayabaral/semantic-release-config
```

## Usage

The shareable config can be configured in the [**semantic-release** configuration file](https://github.com/semantic-release/semantic-release/blob/master/docs/usage/configuration.md#configuration):

```json
{
  "extends": "@binayabaral/semantic-release-config"
}
```

## Configuration

See each [plugin](#plugins) documentation for required installation and configuration steps.
