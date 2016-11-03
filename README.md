# node-continua11y-acceptance

[![Build Status](https://travis-ci.org/18F/node-continua11y-sitemapper.svg?branch=master)](https://travis-ci.org/18F/node-continua11y-sitemapper) [![Test Coverage](https://codeclimate.com/github/18F/node-continua11y-sitemapper/badges/coverage.svg)](https://codeclimate.com/github/18F/node-continua11y-sitemapper/coverage) [![Code Climate](https://codeclimate.com/github/18F/node-continua11y-sitemapper/badges/gpa.svg)](https://codeclimate.com/github/18F/node-continua11y-sitemapper)

Accessibility is important. This is a tool in a series of accessibility
tools designed to be part of your build system, keeping your informed
about the accessibility of your site. This tool works with your sitemap
to scrape each page and report back on accessibility.

Reports are written to an '/acessibility' directory that can be read and
sent to the continua11y-dashboard.

Under the covers, this package is using the great [pa11y-ci
library](https://githubs.com/pa11y/ci). Configuration from this
framework is passed down to that library.

## Usage
-- coming soon --

### Configuration
-- coming soon --

### Reporting

The library writes json reports about each url in each size to `/accessibility`.

You will likely want to update your `.gitignore` to ignore accessibility
reports. These are effemeral artifacts that should not be
part of the repository.

To send the reports to an alternate directory use this configuration:

    {
      report: '/my-special/directory'
    }

## Contributing

See [CONTRIBUTING](CONTRIBUTING.md) for additional information.

## Public domain

This project is in the worldwide [public domain](LICENSE.md). As stated in [CONTRIBUTING](CONTRIBUTING.md):

> This project is in the public domain within the United States, and copyright and related rights in the work worldwide are waived through the [CC0 1.0 Universal public domain dedication](https://creativecommons.org/publicdomain/zero/1.0/).
>
> All contributions to this project will be released under the CC0 dedication. By submitting a pull request, you are agreeing to comply with this waiver of copyright interest.

