# React next boilerplate

This example shows how to use Next.js along with [Ant Design of React](http://ant.design). This is intended to show the integration of this UI toolkit with the Framework.


### Next.js and antd
[Next.js of React Framework](https://nextjs.org/)  
[Ant Design of React](http://ant.design)  


### Install and run
Install dependencies:
```bash
docker run --rm -it -v $(pwd):/app -w /app node:12-alpine yarn install
# or
yarn install
```

Install mock dependencies:
```bash
cd mock

docker run --rm -it -v $(pwd):/app -w /app node:12-alpine yarn install
# or
yarn install

cd ..
```

Run it:
```bash
docker compose up -d
```

Dev url:   
http://localhost:3000/
