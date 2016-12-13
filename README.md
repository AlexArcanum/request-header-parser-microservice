# request-header-parser-microservice

This microservice should return a json file with the client's ip, language, operating system.

How to use:
https://lumi-header-parser.herokuapp.com/api/whoami
(instance should run on Heroku. Wait for a moment for the container to start-up)

The output of the json file should look like this:
{
   "IP Address": "::ffff:1.2.3.4",
   "Language": "en-US,en;q=0.8,bg;q=0.6,mk;q=0.4,sr;q=0.2",
   "OS": "Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36"
}