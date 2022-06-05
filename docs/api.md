# USER
 -  Register user

    > POST /user
    ```
    {
      "name":"user1", 
      "email":"a@user1.com",
      "password":"password"
    }

    ```
-  Login user

    > POST /user

    ```
    {
      "email":"a@user1.com",
      "password":"password"
    }

    ```
# CONTACT
 -  Add a new contact or bulk contacts

    > POST /contact
    ```
    {
      "name":"user1", 
      "contact":1234567890 
    }

    or
 
    [{
      "name": "user1",
      "contact": 1234567890
     },
     {
        "name": "user2",
        "contact": 1234567891
     }]

    ```

- Fetch details of single contact by id
  > GET /contact/id

  *add id as params*

-  Fetch the list of contacts
   > GET /contacts/
 
-  Fetch phase matching results
   > GET /contacts/name

    *add name as params to find matching results*


-  Update the given contact by id
   >PATCH /contact/id

    *add id as params*

   ```
   {
     "name":"user3",
     "number":1234567892
    }
   ```


- Delete the given contact by id
  > DELETE /contact/id

   *add id as params*



