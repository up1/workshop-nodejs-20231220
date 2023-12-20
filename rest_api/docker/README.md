# Working with Docker

## Step 1 :: Start postgresql
```
$docker compose up -d db
```

## Step 2 :: Start rabbitmq
```
$docker compose up -d rabbitmq
```

Access to rabbitmq admin
* http://localhost:15673
  * user=guest
  * password=guest