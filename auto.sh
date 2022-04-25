#!/bin/bash

cd /root/
apt-get -y update

apt-get -y install git
apt-get -y install nodejs npm
npm install -g pm2
# chromium
apt-get -y install gconf-service libxkbcommon-x11-0 libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget libatk-bridge2.0-0 libgbm-dev

git clone https://github.com/pikapikapikachuuu/WRXDaemon

cd WRXDaemon
npm install
pm2 start index.js
