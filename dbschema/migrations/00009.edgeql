CREATE MIGRATION m1oenpj2u5ugvcrwfg4ow3frkx7s5dq2pufnbp7iq6gruoktfkvwsq
    ONTO m135zeks5pvrzp6cmzcaknm3ig2tjgrenkbwygxjyvlbrvwfmfonaq
{
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
  ALTER TYPE default::Organizer {
      ALTER PROPERTY email {
          CREATE CONSTRAINT std::exclusive;
      };
  };
  ALTER TYPE default::Organizer {
      ALTER PROPERTY employeeEmail {
          RENAME TO firstName;
      };
  };
  ALTER TYPE default::Organizer {
      DROP PROPERTY euTaxNumber;
  };
  ALTER TYPE default::Organizer {
      DROP PROPERTY facebook;
  };
  ALTER TYPE default::Organizer {
      DROP PROPERTY facebookGroup;
  };
  ALTER TYPE default::Organizer {
      DROP PROPERTY instagram;
  };
  ALTER TYPE default::Organizer {
      DROP PROPERTY linkedin;
  };
  ALTER TYPE default::Organizer {
      ALTER PROPERTY name {
          RENAME TO lastName;
      };
  };
  ALTER TYPE default::Organizer {
      DROP PROPERTY taxNumber;
      DROP PROPERTY threads;
      DROP PROPERTY tiktok;
      DROP PROPERTY website;
  };
};
