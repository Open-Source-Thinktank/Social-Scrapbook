CREATE TABLE users
(
  "userid" serial PRIMARY KEY,
  "username" varchar NOT NULL CHECK ( username  <> ''),
  "firstname" varchar NOT NULL CHECK ( firstname  <> ''),
  "lastname" varchar NOT NULL CHECK ( lastname  <> ''),
  "profilephoto" varchar NOT NULL,
  UNIQUE ( username )
);

-- INSERT INTO users
--   (username, firstname, lastname, profilephoto)
-- VALUES('bonjay123', 'bonjay', 'tseng', 'photo TBD');

-- INSERT INTO users
--   (username, firstname, lastname, profilephoto)
-- VALUES('minchan123', 'minchan', 'jun', 'photo TBD');

-- INSERT INTO users
--   (username, firstname, lastname, profilephoto)
-- VALUES('stella123', 'stella', 'song', 'photo TBD');

-- INSERT INTO users
--   (username, firstname, lastname, profilephoto)
-- VALUES('marc123', 'marc', 'burnie', 'photo TBD');

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
  "eventownerid" bigint NOT NULL,
  "eventownerusername" varchar NOT NULL,
  UNIQUE ( eventtitle )
  -- FOREIGN KEY (eventownerid) REFERENCES users (userid),
  -- FOREIGN KEY (eventownerusername) REFERENCES users (username)
);

-- INSERT INTO events
--   (eventtitle, eventdate, eventstarttime, eventendtime, eventlocation, eventdetails, eventownerid, eventownerusername)
-- VALUES('bonjay birthday', '8/29/2020', '07:00 PM', '08:00 PM', 'Central Park', 'birthday partayy', 1, 'bonjay123');

-- INSERT INTO events
--   (eventtitle, eventdate, eventstarttime, eventendtime, eventlocation, eventdetails, eventownerid, eventownerusername)
-- VALUES('minchan birthday', '8/30/2020', '08:00 AM', '08:00 PM', 'Six Flags', 'birthday partayyyy', 2, 'minchan123');

-- INSERT INTO events
--   (eventtitle, eventdate, eventstarttime, eventendtime, eventlocation, eventdetails, eventownerid, eventownerusername)
-- VALUES('stella birthday', '8/31/2020', '05:00 PM', '08:00 PM', 'Dave & Buster', 'birthday partayyyyyyyy', 3, 'stella123'
-- );

-- INSERT INTO events
--   (eventtitle, eventdate, eventstarttime, eventendtime, eventlocation, eventdetails, eventownerid, eventownerusername)
-- VALUES('stella wedding', '2/3/2021', '05:00 PM', '08:00 PM', 'Castle in Ireland', 'weddingggg', 3, 'stella123'
-- );

-- INSERT INTO events
--   (eventtitle, eventdate, eventstarttime, eventendtime, eventlocation, eventdetails, eventownerid, eventownerusername)
-- VALUES('marc birthday', '9/1/2020', '02:00 PM', '08:00 PM', 'Mohegan Sun', 'birthday parteeee', 4, 'marc123'
-- );

-- ALTER TABLE events ADD CONSTRAINT "events_fk0" FOREIGN KEY ("eventownerid") REFERENCES users("userid");
-- ALTER TABLE events ADD CONSTRAINT "events_fk1" FOREIGN KEY ("eventownerusername") REFERENCES  users("username");

SELECT setval('events_eventid_seq', 1, false);
-- SELECT setval('events_eventid_seq', max(eventid))
-- FROM events;


CREATE TABLE usersandevents
(
  "uselessid" serial PRIMARY KEY,
  "userid" bigint NOT NULL,
  "username" varchar NOT NULL,
  "eventid" bigint NOT NULL,
  "eventtitle" varchar NOT NULL
  -- FOREIGN KEY ( userid ) REFERENCES users ( userid ),
  -- FOREIGN KEY ( username ) REFERENCES users ( username ),
  -- FOREIGN KEY ( eventid ) REFERENCES events ( eventid ),
  -- FOREIGN KEY ( eventtitle ) REFERENCES events ( eventtitle )
);

-- ALTER TABLE  usersandevents ADD CONSTRAINT "usersandevents_fk0" FOREIGN KEY ("userid") REFERENCES users("userid");
-- ALTER TABLE  usersandevents ADD CONSTRAINT "usersandevents_fk1" FOREIGN KEY ("username") REFERENCES users("username");
-- ALTER TABLE  usersandevents ADD CONSTRAINT "usersandevents_fk2" FOREIGN KEY ("eventid") REFERENCES events("eventid");
-- ALTER TABLE  usersandevents ADD CONSTRAINT "usersandevents_fk3" FOREIGN KEY ("eventtitle") REFERENCES events("eventtitle");

-- INSERT INTO usersandevents
--   (userid, username, eventid, eventtitle)
-- VALUES(1, 'bonjay123', 2, 'minchan birthday');

-- INSERT INTO usersandevents
--   (userid, username, eventid, eventtitle)
-- VALUES(3, 'stella123', 2, 'minchan birthday');

-- INSERT INTO usersandevents
--   (userid, username, eventid, eventtitle)
-- VALUES(3, 'stella123', 1, 'bonjay birthday');

-- INSERT INTO usersandevents
--   (userid, username, eventid, eventtitle)
-- VALUES(3, 'stella123', 4, 'marc birthday');

SELECT setval('usersandevents_uselessid_seq', 1, false);
-- SELECT setval('events_eventid_seq', max(eventid))
-- FROM events;


-- SELECT MAX(userid) FROM users
-- DELETE FROM users WHERE ID = (SELECT MAX(userid) FROM users)


-- DROP TABLE USERSANDEVENTS;
-- DROP TABLE EVENTS;
-- DROP TABLE USERS;