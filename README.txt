Pagination with CouchDB, Node and REACT

Pagination is done at the server side and tested with 30.000+ item. 
Server side pagination is normally recommended when it is about a lot of data. Client or Browser
side pagination can be done for smaller amounts of data(eg 1.000 to 2.000).

The set-up of this application is as follows:
- CouchDB at localhost 5984
- Node Server at localhost 2000
- REACT Front-End at localhost 3000
- Bootstrap as css

In the application root directory, fe is for the REACT Front-End and Server stands 
for the Node Server. The App.tsx component shows only 1 page of 5 rows (simulated cities in this case)
with a total of 30.000 cities in the CouchDB. To fill the CouchDB with dummy cities, go to the index.html 
at localhost:2000 and click on the button "add Cities". Subsequently the Node Server will fill
the CouchDB with dummy cities.

