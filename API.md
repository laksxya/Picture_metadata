# Picture Metadata API

This API allows users to view picture metadata and upload a picture to the server which returns the picture's metadata.

## Get metadata for all pictures

Returns a list of the metadata for all pictures on the server.

**URL** : `/pictures`

**Method** : `GET`

**Response Codes** :

-   Success : 200 OK
-   Error : 500 Internal Server Error

**Success Response** :

```json
{
	"success": true,
	"data": [
		{
			"id": "picture_id",
			"date": "picture_date",
			"size": "picture_size"
		}
	]
}
```

**Error Response** :

```json
{
	"success": false,
	"error": "Internal Server Error"
}
```

## Upload a picture

Upload a picture to the server and return its metadata.

**URL** : `/pictures`

**Method** : `POST`

**Request Body** :

```json
{
	"picture": "picture_file_in_binary"
}
```

**Response Codes** :

-   Success : 200 OK
-   Error : 400 Bad Request, 500 Internal Server Error

**Success Response** :

```json
{
	"id": "picture_id",
	"date": "picture_date",
	"size": "picture_size"
}
```

**Error Response** :

```json
{
	"success": false,
	"error": "Invalid request. Please provide a valid name, email, address, and product(s)"
}
```
