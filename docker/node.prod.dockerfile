FROM node:12-alpine

# Set working directory
WORKDIR /app

# Copy project files
COPY . .

# Install dependencies
RUN yarn install --frozen-lockfile

# Run build
RUN npm run build

# Expose the listening port
EXPOSE 3000

# Launch app
CMD [ "npm", "run", "start" ]
