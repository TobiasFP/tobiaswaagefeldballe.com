#!/bin/bash
ionic build --prod 
cd www/assets/webcomponents
mkdir speedtest
cd speedtest
wget https://raw.githubusercontent.com/TobiasFP/TobiasWaageFeldballe_speedtest_go/main/test/wasm_exec.js
cd ../../../../
docker buildx build --platform=linux/arm/v7 . -t 192.168.0.210:5000/tobias_frontend:latest --load
docker push 192.168.0.210:5000/tobias_frontend:latest