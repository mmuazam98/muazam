Develop a HTTP microservice called number-management-service that exposes a GET REST API "/numbers". This API receives a list of URLs through query parameters. This query param is called "url". It can appear more than once, for example:

http://yourappserver:port/numbers?url=http://something.com/primes&url=http://anything.com/fibo

When API /numbers is called, your service shall retrieve each of these URLs if they turn out to be syntactically valid URLs. Each URL will return a JSON data structure that looks like this:

```json
{ 
    "numbers": [ 1, 2, 3, 5, 8, 13 ] 
}
```

Below are the acceptance criteria :
1. collect response from each valid URLs
2. merge integers received from each URLs
3. sort them in ascending order and ensure each integer appears only once
4. return response to the caller like

```json
{
    "numbers": [merged unique integers]
}
```

5. your service must return the response as quickly as possible (never later than 500 milliseconds)

6. If remote URL takes too long to respond, it must be ignored. The timeout must be respected regardless of the size of the data.

Help:

For your convenience, we are giving you a test server which exposes APIs like
/primes
/fibo
/odd
/rand

baseURL: http://localhost:8090

If you have golang installed on your system, following command will help you run this test server

```
cd problem1
go run testserver.go
```