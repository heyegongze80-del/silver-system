FROM node:22-slim

WORKDIR /workspace

# グローバルにnodeが使えればJSの実行には十分
# 必要に応じてpnpmやtypescriptを追加できるs
RUN npm install -g nodemon
EXPOSE 5000