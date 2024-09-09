#!/bin/bash
ionic build --prod 

docker buildx build --platform=linux/arm/v7 . -t 192.168.0.210:5000/tobias_frontend:latest --load
docker push 192.168.0.210:5000/tobias_frontend:latest