# syntax=docker/dockerfile:1

# Comments are provided throughout this file to help you get started.
# If you need more help, visit the Dockerfile reference guide at
# https://docs.docker.com/engine/reference/builder/

ARG NODE_VERSION=16.16.0
FROM node:${NODE_VERSION}-alpine

# DB = mongodb+srv://Halee_portfolio:Halee@cluster0.fdchc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
# CLOUD_NAME = vitamim
# API_KEY = 562993249483824
# API_SECRET = uo6dYnuiMvn-gOspPxvzA__28qo

ENV DB mongodb+srv://Halee_portfolio:Halee@cluster0.fdchc.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
ENV CLOUD_NAME vitamim
ENV API_KEY 562993249483824
ENV API_SECRET uo6dYnuiMvn-gOspPxvzA__28qo
ENV port 1505


# Use production node environment by default.
# ENV NODE_ENV env


WORKDIR /usr/src/app

# Download dependencies as a separate step to take advantage of Docker's caching.
# Leverage a cache mount to /root/.npm to speed up subsequent builds.
# Leverage a bind mounts to package.json and package-lock.json to avoid having to copy them into
# into this layer.
RUN --mount=type=bind,source=package.json,target=package.json \
    --mount=type=bind,source=package-lock.json,target=package-lock.json \
    --mount=type=cache,target=/root/.npm \
    npm ci --omit=dev

# Run the application as a non-root user.
USER node

# Copy the rest of the source files into the image.
COPY . .

# Expose the port that the application listens on.
EXPOSE 1505

# Run the application.
CMD npm run prod
