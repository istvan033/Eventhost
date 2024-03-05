CREATE MIGRATION m16wlzxooxffpaayva2ukvlfbqtgdigaksebfb3gnoadtpij3fdkra
    ONTO initial
{
  CREATE ABSTRACT TYPE default::HasAddress {
      CREATE REQUIRED PROPERTY address: std::str;
      CREATE REQUIRED PROPERTY addressDetail: std::str;
      CREATE REQUIRED PROPERTY city: std::str;
      CREATE REQUIRED PROPERTY country: std::str;
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
  CREATE TYPE default::Company EXTENDING default::HasAddress, default::HasTimestamps {
      CREATE REQUIRED PROPERTY companyEmail: std::str;
      CREATE PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY euTaxNumber: std::str;
      CREATE PROPERTY facebook: std::str;
      CREATE PROPERTY instagram: std::str;
      CREATE PROPERTY linkedin: std::str;
      CREATE REQUIRED PROPERTY name: std::str;
      CREATE PROPERTY threads: std::str;
      CREATE PROPERTY tiktok: std::str;
      CREATE PROPERTY website: std::str;
  };
  CREATE TYPE default::Event EXTENDING default::HasAddress, default::HasTimestamps {
      CREATE PROPERTY endsAt: std::datetime;
      CREATE PROPERTY startsAt: std::datetime;
      CREATE CONSTRAINT std::expression ON ((.startsAt < .endsAt));
      CREATE PROPERTY description: std::str;
      CREATE REQUIRED PROPERTY emailValidation: std::str;
      CREATE REQUIRED PROPERTY placeName: std::str;
      CREATE REQUIRED PROPERTY title: std::str;
  };
  CREATE TYPE default::Organizer EXTENDING default::HasAddress, default::HasTimestamps {
      CREATE REQUIRED PROPERTY email: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE REQUIRED PROPERTY firstName: std::str;
      CREATE REQUIRED PROPERTY lastName: std::str;
      CREATE REQUIRED PROPERTY phone: std::str;
  };
  ALTER TYPE default::Event {
      CREATE REQUIRED LINK organizer: default::Organizer;
  };
  ALTER TYPE default::Organizer {
      CREATE LINK event := (.<organizer[IS default::Event]);
  };
  CREATE TYPE default::Ticket EXTENDING default::HasTimestamps {
      CREATE REQUIRED LINK event: default::Event;
      CREATE REQUIRED PROPERTY email: std::str;
      CREATE REQUIRED PROPERTY firstName: std::str;
      CREATE REQUIRED PROPERTY fullName: std::str;
      CREATE REQUIRED PROPERTY inviteCode: std::str;
      CREATE REQUIRED PROPERTY lastName: std::str;
      CREATE PROPERTY organizationName: std::str;
      CREATE REQUIRED PROPERTY phone: std::str;
      CREATE REQUIRED PROPERTY token: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::Event {
      CREATE MULTI LINK tickets := (.<event[IS default::Ticket]);
  };
  CREATE TYPE default::User EXTENDING default::HasTimestamps {
      CREATE REQUIRED PROPERTY email: std::str {
          CREATE CONSTRAINT std::exclusive;
      };
      CREATE REQUIRED PROPERTY firstName: std::str;
      CREATE REQUIRED PROPERTY lastName: std::str;
      CREATE REQUIRED PROPERTY phone: std::str;
  };
};
