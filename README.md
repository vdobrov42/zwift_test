# Zwift Test

Test scripts for testing Zwift web page by launching chrome webdriver and navigating to particular pages.

## Setup

This project requires Node.js. Please see these [requirements](https://webdriver.io/docs/gettingstarted/#system-requirements) before continuing.

Install Webdriver.io via the following command.

```bash
npm install @wdio/cli
```

Install Chai via the following command.

```bash
npm install chai
```

This project should already include wdio.conf.js config that should use the following configurations:
 - chromedriver
 - using local machine

## Usage

Run the following command:
```bash
npx wdio wdio.conf.js
```

## License
[MIT](https://choosealicense.com/licenses/mit/)