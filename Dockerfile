# Use the official Node.js image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy the rest of the application code
COPY . .

# Expose port 3000
EXPOSE 3000

# Start the application
CMD ["npm", "start"]
