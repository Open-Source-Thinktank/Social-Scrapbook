CREATE TABLE users
(
  "userid" serial PRIMARY KEY,
  "username" varchar NOT NULL CHECK ( username  <> ''),
  "firstname" varchar NOT NULL CHECK ( firstname  <> ''),
  "lastname" varchar NOT NULL CHECK ( lastname  <> ''),
  "profilephoto" varchar NOT NULL,
  UNIQUE ( username )
);

SELECT setval('users_userid_seq', 1, false);

CREATE TABLE events
(
  "eventid" SERIAL PRIMARY KEY,
  "eventtitle" varchar NOT NULL CHECK ( eventtitle  <> ''),
  "eventdate" date NOT NULL,
  "eventstarttime" time NOT NULL,
  "eventendtime" time NOT NULL,
  "eventlocation" varchar NOT NULL CHECK ( eventlocation  <> ''),
  "eventdetails" varchar NOT NULL CHECK ( eventdetails  <> ''),
  "eventownerid" bigint NOT NULL,
  "eventownerusername" varchar NOT NULL,
  "eventmessages" varchar ARRAY,
  UNIQUE
  ( eventtitle ),
  FOREIGN KEY
  (eventownerid) REFERENCES users
  (userid),
  FOREIGN KEY
  (eventownerusername) REFERENCES users
  (username)
);

SELECT setval('events_eventid_seq', 1, false);

CREATE TABLE usersandevents
  (
    "uselessid" serial PRIMARY KEY,
    "userid" bigint NOT NULL,
    "username" varchar NOT NULL,
    "eventid" bigint NOT NULL,
    "eventtitle" varchar NOT NULL,
    "eventdate" varchar NOT NULL,
    "eventstarttime" varchar NOT NULL,
    "eventendtime" varchar NOT NULL,
    "eventdetails" varchar NOT NULL,
    "eventlocation" varchar NOT NULL,
    UNIQUE (username, eventtitle),
    FOREIGN KEY ( userid ) REFERENCES users ( userid ),
    FOREIGN KEY ( eventid ) REFERENCES events ( eventid )
  );

SELECT setval('usersandevents_uselessid_seq', 1, false);