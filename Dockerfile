FROM node:7.3.0
RUN npm install -g yarn
COPY ./frontend/package.json /frontend/
WORKDIR /frontend
RUN yarn
CMD ["/bin/bash"]
