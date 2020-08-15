CREATE TABLE users
(
  "userid" serial PRIMARY KEY,
  "username" varchar NOT NULL CHECK ( username  <> ''),
  "firstname" varchar NOT NULL CHECK ( firstname  <> ''),
  "lastname" varchar NOT NULL CHECK ( lastname  <> ''),
  "profilephoto" varchar NOT NULL,
  UNIQUE ( username )
);

INSERT INTO users
  (username, firstname, lastname, profilephoto)
VALUES('bonjay123', 'bonjay', 'tseng', 'photo TBD');

INSERT INTO users
  (username, firstname, lastname, profilephoto)
VALUES('minchan123', 'minchan', 'jun', 'photo TBD');

INSERT INTO users
  (username, firstname, lastname, profilephoto)
VALUES('stella123', 'stella', 'song', 'photo TBD');

INSERT INTO users
  (username, firstname, lastname, profilephoto)
VALUES('marc123', 'marc', 'burnie', 'photo TBD');

SELECT setval('users_userid_seq', 1, false);
-- SELECT setval('users_userid_seq', max(userid))
-- FROM users;

CREATE TABLE events
(
  "eventid" SERIAL PRIMARY KEY,
  "eventtitle" varchar NOT NULL CHECK ( eventtitle  <> ''),
  "eventdate" date NOT NULL,
  "eventstarttime" time NOT NULL,
  "eventendtime" time NOT NULL,
  "eventlocation" varchar NOT NULL CHECK ( eventlocation  <> ''),
  "eventdetails" varchar NOT NULL CHECK ( eventdetails  <> ''),
  "eventowner" varchar NOT NULL,
  UNIQUE ( eventtitle ),
  FOREIGN KEY (eventowner) REFERENCES users (username)
);

INSERT INTO events
  (eventtitle, eventdate, eventstarttime, eventendtime, eventlocation, eventdetails, eventowner)
VALUES('bonjay birthday', '8/29/2020', '07:00 PM', '08:00 PM', 'Central Park', 'birthday partayy', 'bonjay123');

INSERT INTO events
  (eventtitle, eventdate, eventstarttime, eventendtime, eventlocation, eventdetails, eventowner)
VALUES('minchan birthday', '8/30/2020', '08:00 AM', '08:00 PM', 'Six Flags', 'birthday partayyyy', 'minchan123');

INSERT INTO events
  (eventtitle, eventdate, eventstarttime, eventendtime, eventlocation, eventdetails, eventowner)
VALUES('stella birthday', '8/31/2020', '05:00 PM', '08:00 PM', 'Dave & Buster', 'birthday partayyyyyyyy', 'stella123'
);

INSERT INTO events
  (eventtitle, eventdate, eventstarttime, eventendtime, eventlocation, eventdetails, eventowner)
VALUES('marc birthday', '9/1/2020', '02:00 PM', '08:00 PM', 'Mohegan Sun', 'birthday parteeee', 'marc123'
);

SELECT setval('events_eventid_seq', 1, false);
-- SELECT setval('events_eventid_seq', max(eventid))
-- FROM events;


CREATE TABLE usersandevents
(
  uselessid serial PRIMARY KEY,
  userid bigint REFERENCES users (userid),
  username varchar REFERENCES users (username),
  eventid bigint REFERENCES events (eventid),
  eventtitle varchar REFERENCES events (eventtitle)
);

INSERT INTO usersandevents
  (userid, username, eventid, eventtitle)
VALUES(1, 'bonjay123', 2, 'minchan birthday');

INSERT INTO usersandevents
  (userid, username, eventid, eventtitle)
VALUES(3, 'stella123', 2, 'minchan birthday');


SELECT setval('usersandevents_uselessid_seq', 1, false);
-- SELECT setval('events_eventid_seq', max(eventid))
-- FROM events;