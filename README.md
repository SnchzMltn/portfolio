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
forever stopall && forever start -c "npm start" ./
```
5. Refresh Nginx
```bash
sudo service nginx restart
```

<br/>

Not working:

~To deploy the app is using gcloud delivery service, in which once the code is a host we can build the project:~

~`npm run build`~

~If everything goes OK we can:~

~`gcloud app deploy`~

~Which will thake our project and deploy it to a named configuration (`app`).~

# Visit the page: 

After deployed, at the host: http://34.28.209.189/

Public site: www.miltonsanchez.com