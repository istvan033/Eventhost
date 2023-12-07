CREATE MIGRATION m1j5eh5p5umq36ry66t2rsoil7dde5uvjjfnlfacur4iz537cjee3a
    ONTO initial
{
  CREATE ABSTRACT TYPE default::HasAddress {
      CREATE REQUIRED PROPERTY address: std::str;
      CREATE REQUIRED PROPERTY addressDetail: std::str;
      CREATE REQUIRED PROPERTY city: std::str;
      CREATE REQUIRED PROPERTY country: std::str {
          CREATE CONSTRAINT std::max_len_value(2);
          CREATE CONSTRAINT std::min_len_value(2);
      };
      CREATE REQUIRED PROPERTY zipCode: std::str;
  };
  CREATE ABSTRACT TYPE default::HasTimestamps {
      CREATE REQUIRED PROPERTY createdAt: std::datetime {
          SET default := (std::datetime_of_statement());
          SET readonly := true;
      };
      CREATE REQUIRED PROPERTY updatedAt: std::datetime {
          SET default := (std::datetime_of_statement());
          CREATE REWRITE
              UPDATE 
              USING (std::datetime_of_statement());
      };
  };
  CREATE TYPE default::User EXTENDING default::HasTimestamps {
      CREATE REQUIRED PROPERTY email: std::str;
      CREATE REQUIRED PROPERTY firstName: std::str;
      CREATE REQUIRED PROPERTY lastName: std::str;
      CREATE REQUIRED PROPERTY passwordHash: std::str;
      CREATE REQUIRED PROPERTY phone: std::str;
  };
  CREATE TYPE default::Scan EXTENDING default::HasTimestamps {
      CREATE REQUIRED LINK user: default::User;
  };
  CREATE TYPE default::Event EXTENDING default::HasAddress, default::HasTimestamps {
      CREATE PROPERTY endsAt: std::datetime;
      CREATE PROPERTY startsAt: std::datetime;
      CREATE CONSTRAINT std::expression ON ((.startsAt < .endsAt));
      CREATE PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY placeName: std::str;
      CREATE PROPERTY title: std::str;
  };
  CREATE TYPE default::Organizer EXTENDING default::HasAddress, default::HasTimestamps {
      CREATE MULTI LINK users: default::User;
      CREATE REQUIRED PROPERTY email: std::str;
      CREATE REQUIRED PROPERTY euTaxNumber: std::str;
      CREATE PROPERTY facebook: std::str;
      CREATE PROPERTY facebookGroup: std::str;
      CREATE PROPERTY instagram: std::str;
      CREATE PROPERTY linkedin: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE REQUIRED PROPERTY phone: std::str;
      CREATE REQUIRED PROPERTY taxNumber: std::str;
      CREATE PROPERTY threads: std::str;
      CREATE PROPERTY tiktok: std::str;
      CREATE REQUIRED PROPERTY website: std::str;
  };
  ALTER TYPE default::Event {
      CREATE REQUIRED LINK organizer: default::Organizer;
  };
  ALTER TYPE default::Organizer {
      CREATE LINK events := (.<organizer[IS default::Event]);
  };
  CREATE TYPE default::Ticket EXTENDING default::HasTimestamps {
      CREATE MULTI LINK scans: default::Scan;
      CREATE PROPERTY checkedIn := (EXISTS (.scans));
      CREATE PROPERTY badgeReceivedAt: std::datetime;
      CREATE PROPERTY badgeToken: std::str;
      CREATE REQUIRED PROPERTY email: std::str;
      CREATE REQUIRED PROPERTY firstName: std::str;
      CREATE REQUIRED PROPERTY gdprAccepted: std::bool;
      CREATE REQUIRED PROPERTY inviteCode: std::str;
      CREATE REQUIRED PROPERTY lastName: std::str;
      CREATE REQUIRED PROPERTY newsletterSubscribed: std::bool;
      CREATE PROPERTY note: std::str;
      CREATE PROPERTY organizationName: std::str;
      CREATE REQUIRED PROPERTY phone: std::str;
      CREATE REQUIRED PROPERTY token: std::str;
  };
  ALTER TYPE default::Event {
      CREATE MULTI LINK tickets: default::Ticket {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  CREATE TYPE default::LinkOpen EXTENDING default::HasTimestamps {
      CREATE REQUIRED LINK ticket: default::Ticket;
  };
};
