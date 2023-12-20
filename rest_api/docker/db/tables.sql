create table if not exists messages (
    id serial primary key,
    message varchar(255) not null
);