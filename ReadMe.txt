This is a very basic example of (`List All Data`, `Detail By Each Id`, `Create`, `Update`, `Delete`) in Node.js and MongoDB.

Running Locally
Make sure you have Node.js(`https://nodejs.org/en/`) and the MongoDB for 32-bit(`https://www.mongodb.org/dl/win32/i386`) and for others (`https://www.mongodb.com/download-center/community`) installed.

You're gonna need to create a DB named `InterviewDB` and import from the `MongoDB` folder.
And please create collection name `posts`.
You can adjust the database configuration in `app/config/config.json`.

You can run " node server.js " from the project directory in command prompt.

You can call url(`localhost:8080`) from your `Postman` or `Restful`.



***`Create` => `http://localhost:8080/post/create` => `POST`
```json
{
	"title": "Testing1",
	"message": "This is testing for testing1. This is testing for testing1."
}
```


***`List All Data` => `http://localhost:8080/post/list` => `GET`


***`Detail By Each Id` => `http://localhost:8080/post/detail` => `POST`
```json
{
	"id": "5d10c8970da89f1bd0f116ef"
}
```


***`Update` => `http://localhost:8080/post/update` => `POST`
```json
{
	"id": "5d10c8970da89f1bd0f1",
	"title": "Testing111",
	"message": "This is testing for testing111. This is testing for testing111."
}
```


***`Delete` => `http://localhost:8080/post/delete` => `POST`
```json
{
	"id": "5d10c8970da89f1bd0f116ef"
}
```