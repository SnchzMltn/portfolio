# How to run locally

`npm install`

`npm run start`

# How to build

`npm run build`

# How to deploy

1. Login to [GCP Instances](https://console.cloud.google.com/compute/instances?project=portfolio-322621&tab=instances)
2. Fetch all changes
```bash
git fetch
```
3. Build React app
```bash
npm run build
```
4. Use forever to stop,  and run the application (from root directory) in the background
```bash
forever stopall && forever start -c "npm run start" ./
```
5. Refresh Nginx
```bash
sudo service nginx restart
```
